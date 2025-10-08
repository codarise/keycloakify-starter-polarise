import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

export default function LoginResetOtp(props: PageProps<Extract<KcContext, { pageId: "login-reset-otp.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;


    const { url, messagesPerField, configuredOtpCredentials } = kcContext;

    const { msg, msgStr } = i18n;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("totp")}
            headerNode={msg("doLogIn")}
        >
            <form id="kc-otp-reset-form" className="flex flex-col gap-4" action={url.loginAction} method="post">
                    <div className="flex flex-col gap-4">
                        <p id="kc-otp-reset-form-description">{msg("otp-reset-description")}</p>
                        {configuredOtpCredentials.userOtpCredentials.map((otpCredential, index) => (
                            <RadioGroup key={otpCredential.id} className="flex items-center">
                                <RadioGroupItem value={otpCredential.id} id={`kc-otp-credential-${index}`} defaultChecked={otpCredential.id === configuredOtpCredentials.selectedCredentialId} />
                                <Label htmlFor={`kc-otp-credential-${index}`}>{otpCredential.userLabel}</Label>
                   
                            </RadioGroup>
                        ))}
                        <div className="flex flex-col gap-2">
                            <div id="kc-form-buttons" className="flex flex-col gap-2">
                                <input
                                    id="kc-otp-reset-form-submit"
                                    className={buttonVariants({ variant: "default", className: "w-full" })}
                                    type="submit"
                                    value={msgStr("doSubmit")}
                                />
                            </div>
                        </div>
                    </div>
            </form>
            <div className="clearfix" />
        </Template>
    );
}
