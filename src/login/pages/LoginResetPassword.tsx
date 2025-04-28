import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { buttonVariants } from "../../components/ui/button";

export default function LoginResetPassword(props: PageProps<Extract<KcContext, { pageId: "login-reset-password.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;


    const { url, realm, auth, messagesPerField } = kcContext;

    const { msg, msgStr } = i18n;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayInfo
            displayMessage={!messagesPerField.existsError("username")}
            infoNode={realm.duplicateEmailsAllowed ? <span className="text-sm bg-muted p-4 rounded-md">{msg("emailInstructionUsername")}</span> : <span className="text-sm bg-muted p-4 rounded-md">{msg("emailInstruction")}</span>}
            headerNode={msg("emailForgotTitle")}
        >
            <form id="kc-reset-password-form" className="flex flex-col gap-4" action={url.loginAction} method="post">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="username">
                            {!realm.loginWithEmailAllowed
                                ? msg("username")
                                : !realm.registrationEmailAsUsername
                                  ? msg("usernameOrEmail")
                                  : msg("email")}
                        </Label>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input
                            type="text"
                            id="username"
                            name="username"
                            autoFocus
                            defaultValue={auth.attemptedUsername ?? ""}
                            aria-invalid={messagesPerField.existsError("username")}
                        />
                        {messagesPerField.existsError("username") && (
                            <span
                                id="input-error-username"
                                className="text-sm text-red-500"
                                aria-live="polite"
                                dangerouslySetInnerHTML={{
                                    __html: kcSanitize(messagesPerField.get("username"))
                                }}
                            />
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div id="kc-form-buttons" className="flex flex-col gap-2">
                        <input
                            className={buttonVariants({ variant: "default", className: "w-full" })}
                            type="submit"
                            value={msgStr("doSubmit")}
                        />
                    </div>
                    <div id="kc-form-options" className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <span>
                                <a href={url.loginUrl} className={buttonVariants({ variant: "link", className: "w-full" })}>{msg("backToLogin")}</a>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </Template>
    );
}
