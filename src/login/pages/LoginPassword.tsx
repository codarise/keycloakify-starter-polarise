import type { JSX } from "keycloakify/tools/JSX";
import { useState } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { useIsPasswordRevealed } from "keycloakify/tools/useIsPasswordRevealed";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";
import { EyeClosed, EyeIcon } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export default function LoginPassword(props: PageProps<Extract<KcContext, { pageId: "login-password.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { realm, url, messagesPerField } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            headerNode={msg("doLogIn")}
            displayMessage={!messagesPerField.existsError("password")}
        >
            <div id="kc-form">
                <div id="kc-form-wrapper">
                    <form
                        id="kc-form-login"
                        onSubmit={() => {
                            setIsLoginButtonDisabled(true);
                            return true;
                        }}
                        action={url.loginAction}
                        className="flex flex-col gap-4"
                        method="post"
                    >
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password" className={kcClsx("kcLabelClass")}>
                                {msg("password")}
                            </Label>

                            <PasswordWrapper i18n={i18n} passwordInputId="password">
                                <Input
                                    tabIndex={2}
                                    id="password"
                                    className={kcClsx("kcInputClass")}
                                    name="password"
                                    type="password"
                                    autoFocus
                                    autoComplete="on"
                                    aria-invalid={messagesPerField.existsError("username", "password")}
                                />
                            </PasswordWrapper>

                            {messagesPerField.existsError("password") && (
                                <span
                                    id="input-error-password"
                                    className="text-red-500 text-sm"
                                    aria-live="polite"
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(messagesPerField.get("password"))
                                    }}
                                />
                            )}
                        </div>
                     
                        <div id="kc-form-buttons">
                            <input
                                tabIndex={4}
                                className={buttonVariants({ variant: "default", className: "w-full" })}
                                name="login"
                                id="kc-login"
                                type="submit"
                                value={msgStr("doLogIn")}
                                disabled={isLoginButtonDisabled}
                            />
                        </div>
                        <div>
                            <div id="kc-form-options" />
                            <div className="flex flex-col gap-2">
                                {realm.resetPasswordAllowed && (
                                    <span>
                                        <a tabIndex={5} href={url.loginResetCredentialsUrl} className={buttonVariants({ variant: "link", className:"w-full" })}>
                                            {msg("doForgotPassword")}
                                        </a>
                                    </span>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Template>
    );
}

function PasswordWrapper(props: { i18n: I18n; passwordInputId: string; children: JSX.Element }) {
    const { i18n, passwordInputId, children } = props;

    const { msgStr } = i18n;

    const { isPasswordRevealed, toggleIsPasswordRevealed } = useIsPasswordRevealed({ passwordInputId });

    return (
        <div className="flex items-center gap-2">
            {children}
            <button
                type="button"
                className={buttonVariants({ variant: "outline", size: "icon" })}
                aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
                aria-controls={passwordInputId}
                onClick={toggleIsPasswordRevealed}
            >
                {isPasswordRevealed ? <EyeClosed /> : <EyeIcon />}
            </button>
        </div>
    );
}
