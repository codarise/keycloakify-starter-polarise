import { Fragment } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useScript } from "keycloakify/login/pages/WebauthnAuthenticate.useScript";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";

export default function WebauthnAuthenticate(props: PageProps<Extract<KcContext, { pageId: "webauthn-authenticate.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { url, realm, registrationDisabled, authenticators, shouldDisplayAuthenticators } = kcContext;

    const { msg, msgStr, advancedMsg } = i18n;

    const authButtonId = "authenticateWebAuthnButton";

    useScript({
        authButtonId,
        kcContext,
        i18n
    });

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayInfo={realm.registrationAllowed && !registrationDisabled}
            infoNode={
                <div id="kc-registration">
                    <span>
                        {msg("noAccount")}{" "}
                        <a tabIndex={6} href={url.registrationUrl}>
                            {msg("doRegister")}
                        </a>
                    </span>
                </div>
            }
            headerNode={msg("webauthn-login-title")}
        >
            <div id="kc-form-webauthn" className={kcClsx("kcFormClass")}>
                <form id="webauth" action={url.loginAction} method="post">
                    <input type="hidden" id="clientDataJSON" name="clientDataJSON" />
                    <input type="hidden" id="authenticatorData" name="authenticatorData" />
                    <input type="hidden" id="signature" name="signature" />
                    <input type="hidden" id="credentialId" name="credentialId" />
                    <input type="hidden" id="userHandle" name="userHandle" />
                    <input type="hidden" id="error" name="error" />
                </form>
                <div className={clsx(kcClsx("kcFormGroupClass"), "no-bottom-margin")}>
                    {authenticators && (
                        <>
                            <form id="authn_select" className={kcClsx("kcFormClass")}>
                                {authenticators.authenticators.map(authenticator => (
                                    <input type="hidden" name="authn_use_chk" value={authenticator.credentialId} />
                                ))}
                            </form>

                            {shouldDisplayAuthenticators && (
                                <>
                                    {authenticators.authenticators.length > 1 && (
                                        <p className="text-sm pb-4">{msg("webauthn-available-authenticators")}</p>
                                    )}
                                    <div className="flex flex-col gap-4 pb-4">
                                        {authenticators.authenticators.map((authenticator, i) => (
                                            <div key={i} id={`kc-webauthn-authenticator-item-${i}`} className="flex flex-col gap-2 bg-card/50 border border-border/50 px-4 py-2 rounded-md">
                                                <div className={kcClsx("kcSelectAuthListItemIconClass")}>
                                                    <i
                                                        className={clsx(
                                                            (() => {
                                                                const className = kcClsx(authenticator.transports.iconClass as any);
                                                                if (className === authenticator.transports.iconClass) {
                                                                    return kcClsx("kcWebAuthnDefaultIcon");
                                                                }
                                                                return className;
                                                            })(),
                                                            kcClsx("kcSelectAuthListItemIconPropertyClass")
                                                        )}
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <div
                                                        id={`kc-webauthn-authenticator-label-${i}`}
                                                        className="text-sm font-semibold"
                                                    >
                                                        {advancedMsg(authenticator.label)}
                                                    </div>
                                                    {authenticator.transports.displayNameProperties?.length && (
                                                        <div
                                                            id={`kc-webauthn-authenticator-transport-${i}`}
                                                            className="text-sm"
                                                        >
                                                            {authenticator.transports.displayNameProperties
                                                                .map((displayNameProperty, i, arr) => ({
                                                                    displayNameProperty,
                                                                    hasNext: i !== arr.length - 1
                                                                }))
                                                                .map(({ displayNameProperty, hasNext }) => (
                                                                    <Fragment key={displayNameProperty}>
                                                                        {advancedMsg(displayNameProperty)}
                                                                        {hasNext && <span>, </span>}
                                                                    </Fragment>
                                                                ))}
                                                        </div>
                                                    )}
                                                    <div className="flex flex-col gap-1 bg-card p-2 rounded-md">
                                                        <span  className="text-sm text-muted-foreground" id={`kc-webauthn-authenticator-createdlabel-${i}`}>
                                                            {msg("webauthn-createdAt-label")}
                                                        </span>
                                                        <span className="text-sm" id={`kc-webauthn-authenticator-created-${i}`}>{authenticator.createdAt}</span>
                                                    </div>
                                                    <div className="flex-1" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    )}
                    <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
                        <input
                            id={authButtonId}
                            type="button"
                            autoFocus
                            value={msgStr("webauthn-doAuthenticate")}
                            className={buttonVariants({ variant: "default", className: "w-full" })}
                        />
                    </div>
                </div>
            </div>
        </Template>
    );
}
