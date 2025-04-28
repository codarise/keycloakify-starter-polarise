import type { JSX } from "keycloakify/tools/JSX";
import { useState } from "react";
import type { LazyOrNot } from "keycloakify/tools/LazyOrNot";
import { getKcClsx, type KcClsx } from "keycloakify/login/lib/kcClsx";
import type { UserProfileFormFieldsProps } from "keycloakify/login/UserProfileFormFieldsProps";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";

type UpdateEmailProps = PageProps<Extract<KcContext, { pageId: "update-email.ftl" }>, I18n> & {
    UserProfileFormFields: LazyOrNot<(props: UserProfileFormFieldsProps) => JSX.Element>;
    doMakeUserConfirmPassword: boolean;
};

export default function UpdateEmail(props: UpdateEmailProps) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes, UserProfileFormFields, doMakeUserConfirmPassword } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { msg, msgStr } = i18n;

    const [isFormSubmittable, setIsFormSubmittable] = useState(false);

    const { url, messagesPerField, isAppInitiatedAction } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={messagesPerField.exists("global")}
            displayRequiredFields
            headerNode={msg("updateEmailTitle")}
        >
            <form id="kc-update-email-form" className="flex flex-col gap-4" action={url.loginAction} method="post">
                <UserProfileFormFields
                    kcContext={kcContext}
                    i18n={i18n}
                    kcClsx={kcClsx}
                    onIsFormSubmittableValueChange={setIsFormSubmittable}
                    doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                />

                <div className="flex flex-col gap-4">
                    <div id="kc-form-options">
                        <div className={kcClsx("kcFormOptionsWrapperClass")} />
                    </div>

                    <LogoutOtherSessions kcClsx={kcClsx} i18n={i18n} />

                    <div id="kc-form-buttons" className="flex flex-col gap-4">
                        <input
                            disabled={!isFormSubmittable}
                            className={buttonVariants({ className: "w-full" })}
                            type="submit"
                            value={msgStr("doSubmit")}
                        />
                        {isAppInitiatedAction && (
                            <button
                                className={buttonVariants({ variant: "outline", className: "w-full" })}
                                type="submit"
                                name="cancel-aia"
                                value="true"
                            >
                                {msg("doCancel")}
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </Template>
    );
}

function LogoutOtherSessions(props: { kcClsx: KcClsx; i18n: I18n }) {
    const { i18n } = props;

    const { msg } = i18n;

    return (
        <div id="kc-form-options">
            <Label htmlFor="logout-sessions">
                <Checkbox
                    id="logout-sessions"
                    name="logout-sessions"
                    value="on"
                    defaultChecked={true}
                />
                {msg("logoutOtherSessions")}
            </Label>
        </div>
    );
}
