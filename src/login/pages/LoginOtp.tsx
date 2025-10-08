import { useState } from "react";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../../components/ui/input-otp";
import { buttonVariants } from "../../components/ui/button";

export default function LoginOtp(props: PageProps<Extract<KcContext, { pageId: "login-otp.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { otpLogin, url, messagesPerField } = kcContext;

    const { msg, msgStr } = i18n;

    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("totp")}
            headerNode={msg("doLogIn")}
        >
            <form
                id="kc-otp-login-form"
                action={url.loginAction}
                onSubmit={() => {
                    setIsSubmitting(true);
                    return true;
                }}
                method="post"
            >
                {otpLogin.userOtpCredentials.length > 1 && (
                    <div className="flex flex-col gap-4 mx-auto w-full pb-12">
                        <RadioGroup defaultValue={otpLogin.selectedCredentialId || otpLogin.userOtpCredentials[0].id} name="selectedCredentialId">
                            {otpLogin.userOtpCredentials.map((otpCredential, index) => (
                                <div className="flex items-center space-x-2" key={index}>
                                    <RadioGroupItem value={otpCredential.id} id={`kc-otp-credential-${index}`} />
                                    <Label htmlFor={`kc-otp-credential-${index}`}>{otpCredential.userLabel}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                )}

                <div>
                    <Label htmlFor="otp" className="mb-4 mx-auto w-full flex items-center justify-center">
                        {msg("loginOtpOneTime")}
                    </Label>
                    <div className="mx-auto w-full flex items-center justify-center">
                        <InputOTP maxLength={6} name="otp" id="otp" autoFocus aria-invalid={messagesPerField.existsError("totp")}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                    {messagesPerField.existsError("totp") && (
                        <p
                            id="input-error-otp-code"
                            className="text-destructive text-center text-sm mt-4"
                            aria-live="polite"
                            dangerouslySetInnerHTML={{
                                __html: kcSanitize(messagesPerField.get("totp"))
                            }}
                        />
                    )}
                </div>

                <div className="flex flex-col gap-4 mx-auto w-full">
                    <div id="kc-form-options">
                        <div className={kcClsx("kcFormOptionsWrapperClass")}></div>
                    </div>
                    <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
                        <input
                            className={buttonVariants({ variant: "default", className: "w-full" })}
                            name="login"
                            id="kc-login"
                            type="submit"
                            value={msgStr("doLogIn")}
                            disabled={isSubmitting}
                        />
                    </div>
                </div>
            </form>
        </Template>
    );
}
