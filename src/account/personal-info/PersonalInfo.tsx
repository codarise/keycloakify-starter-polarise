/**
 * This file has been claimed for ownership from @keycloakify/keycloak-account-ui version 260200.0.0.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "account/personal-info/PersonalInfo.tsx" --revert
 */

/* eslint-disable */

// @ts-nocheck

import {
    UserProfileFields,
    beerify,
    debeerify,
    setUserProfileServerError,
    useEnvironment
} from "../../shared/keycloak-ui-shared";
import {
    ActionGroup,
    Alert,
    AlertVariant,
    Button,
    ExpandableSection,
    Form,
    Spinner
} from "../../shared/@patternfly/react-core";
import { ExternalLinkSquareAltIcon } from "../../shared/@patternfly/react-icons";
import { TFunction } from "i18next";
import { useState } from "react";
import { ErrorOption, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { getPersonalInfo, getSupportedLocales, savePersonalInfo } from "../api/methods";
import { UserProfileMetadata, UserRepresentation } from "../api/representations";
import { Page } from "../components/page/Page";
import type { Environment } from "../environment";
import { TFuncKey, i18n } from "../i18n";
import { useAccountAlerts } from "../utils/useAccountAlerts";
import { usePromise } from "../utils/usePromise";

export const PersonalInfo = () => {
    const { t } = useTranslation();
    const context = useEnvironment<Environment>();
    const [userProfileMetadata, setUserProfileMetadata] = useState<UserProfileMetadata>();
    const [supportedLocales, setSupportedLocales] = useState<string[]>([]);
    const form = useForm<UserRepresentation>({ mode: "onChange" });
    const { handleSubmit, reset, setValue, setError } = form;
    const { addAlert } = useAccountAlerts();

    usePromise(
        signal =>
            Promise.all([
                getPersonalInfo({ signal, context }),
                getSupportedLocales({ signal, context })
            ]),
        ([personalInfo, supportedLocales]) => {
            setUserProfileMetadata(personalInfo.userProfileMetadata);
            setSupportedLocales(supportedLocales);
            reset(personalInfo);
            Object.entries(personalInfo.attributes || {}).forEach(([k, v]) =>
                setValue(`attributes[${beerify(k)}]`, v)
            );
        }
    );

    const onSubmit = async (user: UserRepresentation) => {
        try {
            const attributes = Object.fromEntries(
                Object.entries(user.attributes || {}).map(([k, v]) => [debeerify(k), v])
            );
            await savePersonalInfo(context, { ...user, attributes });
            const locale = attributes["locale"]?.toString();
            if (locale)
                i18n.changeLanguage(locale, error => {
                    if (error) {
                        console.warn("Error(s) loading locale", locale, error);
                    }
                });
            context.keycloak.updateToken();
            addAlert(t("accountUpdatedMessage"));
        } catch (error) {
            addAlert(t("accountUpdatedError"), AlertVariant.danger);

            setUserProfileServerError(
                { responseData: { errors: error as any } },
                (name: string | number, error: unknown) =>
                    setError(name as string, error as ErrorOption),
                ((key: TFuncKey, param?: object) => t(key, param as any)) as TFunction
            );
        }
    };

    if (!userProfileMetadata) {
        return <Spinner />;
    }

    const allFieldsReadOnly = () =>
        userProfileMetadata?.attributes
            ?.map(a => a.readOnly)
            .reduce((p, c) => p && c, true);

    const {
        updateEmailFeatureEnabled,
        updateEmailActionEnabled,
        isRegistrationEmailAsUsername,
        isEditUserNameAllowed
    } = context.environment.features;
    return (
        <Page title={t("personalInfo")} description={t("personalInfoDescription")}>
            <Form isHorizontal onSubmit={handleSubmit(onSubmit)}>
                <UserProfileFields
                    form={form}
                    userProfileMetadata={userProfileMetadata}
                    supportedLocales={supportedLocales}
                    currentLocale={context.environment.locale}
                    t={
                        ((key: unknown, params) =>
                            t(key as TFuncKey, params as any)) as TFunction
                    }
                    renderer={attribute =>
                        attribute.name === "email" &&
                        updateEmailFeatureEnabled &&
                        updateEmailActionEnabled &&
                        (!isRegistrationEmailAsUsername || isEditUserNameAllowed) ? (
                            <Button
                                id="update-email-btn"
                                variant="link"
                                onClick={() =>
                                    context.keycloak.login({ action: "UPDATE_EMAIL" })
                                }
                                icon={<ExternalLinkSquareAltIcon />}
                                iconPosition="right"
                            >
                                {t("updateEmail")}
                            </Button>
                        ) : undefined
                    }
                />
                {!allFieldsReadOnly() && (
                    <ActionGroup>
                        <Button
                            data-testid="save"
                            type="submit"
                            id="save-btn"
                            variant="default"
                        >
                          <span className="text-background">{t("save")}</span>
                        </Button>
                        <Button
                            data-testid="cancel"
                            id="cancel-btn"
                            variant="outline"
                            onClick={() => reset()}
                        >
                            {t("cancel")}
                        </Button>
                    </ActionGroup>
                )}
                {context.environment.features.deleteAccountAllowed && (
                    <div className="flex flex-col md:flex-row justify-between md:items-end gap-2 p-4 bg-destructive/10">
                        <div className="flex flex-col gap-2">
                        <p className="text-lg font-bold text-destructive">{t("deleteAccount")}</p>
                        <p className="text-sm mb-4">{t("deleteAccountWarning")}</p>
                        </div>
                        <Button
                            id="delete-account-btn"
                            variant="destructive"
                            onClick={() =>
                                context.keycloak.login({
                                    action: "delete_account"
                                })
                            }
                >
                    <span className="text-destructive hover:text-white">{t("delete")}</span>
                </Button>
                    </div>
                )}
            </Form>
        </Page>
    );
};

export default PersonalInfo;
