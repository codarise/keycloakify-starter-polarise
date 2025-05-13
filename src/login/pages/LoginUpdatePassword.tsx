import type { JSX } from "keycloakify/tools/JSX";
import { useIsPasswordRevealed } from "keycloakify/tools/useIsPasswordRevealed";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { EyeIcon } from "lucide-react";
import { EyeClosed } from "lucide-react";
import { Button, buttonVariants } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";

export default function LoginUpdatePassword(props: PageProps<Extract<KcContext, { pageId: "login-update-password.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { msg, msgStr } = i18n;

    const { url, messagesPerField, isAppInitiatedAction } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("password", "password-confirm")}
            headerNode={msg("updatePasswordTitle")}
        >
            <form id="kc-passwd-update-form" action={url.loginAction} method="post" className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password-new">{msg("passwordNew")}</Label>
                    </div>
                    <div className="flex flex-col gap-2">
                        <PasswordWrapper i18n={i18n} passwordInputId="password-new">
                            <Input
                                type="password"
                                id="password-new"
                                name="password-new"
                                autoFocus
                                autoComplete="new-password"
                                aria-invalid={messagesPerField.existsError("password", "password-confirm")}
                            />
                        </PasswordWrapper>

                        {messagesPerField.existsError("password") && (
                            <span
                                id="input-error-password"
                                className="text-sm text-red-500"
                                aria-live="polite"
                                dangerouslySetInnerHTML={{
                                    __html: kcSanitize(messagesPerField.get("password"))
                                }}
                            />
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="password-confirm">{msg("passwordConfirm")}</Label>

                    <PasswordWrapper i18n={i18n} passwordInputId="password-confirm">
                        <Input
                            type="password"
                            id="password-confirm"
                            name="password-confirm"
                            autoFocus
                            autoComplete="new-password"
                            aria-invalid={messagesPerField.existsError("password", "password-confirm")}
                        />
                    </PasswordWrapper>

                    {messagesPerField.existsError("password-confirm") && (
                        <span
                            id="input-error-password-confirm"
                            className="text-sm text-red-500"
                            aria-live="polite"
                            dangerouslySetInnerHTML={{
                                __html: kcSanitize(messagesPerField.get("password-confirm"))
                            }}
                        />
                    )}
                </div>
                <div className="flex flex-col gap-4 ">
                    <LogoutOtherSessions i18n={i18n} />
                    <div id="kc-form-buttons" className="flex flex-col gap-4">
                        <input className={buttonVariants({ variant: "default", className: "w-full" })} type="submit" value={msgStr("doSubmit")} />
                        {isAppInitiatedAction && (
                            <Button variant="outline" className="w-full" type="submit" name="cancel-aia" value="true">
                                {msg("doCancel")}
                            </Button>
                        )}
                    </div>
                </div>
            </form>
        </Template>
    );
}

function LogoutOtherSessions(props: { i18n: I18n }) {
    const { i18n } = props;

    const { msg } = i18n;

    return (
        <div id="kc-form-options" className="flex flex-col gap-2 py-2">
            <div className="flex items-center gap-2">
                <Label htmlFor="logout-sessions">
                    <Checkbox id="logout-sessions" name="logout-sessions" value="on" defaultChecked={true} />
                    {msg("logoutOtherSessions")}
                </Label>
            </div>
        </div>
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
