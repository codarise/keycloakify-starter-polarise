import { getKcClsx, KcClsx } from "keycloakify/login/lib/kcClsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "../../components/ui/input-otp";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";

export default function LoginConfigTotp(props: PageProps<Extract<KcContext, { pageId: "login-config-totp.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { url, isAppInitiatedAction, totp, mode, messagesPerField } = kcContext;

    const { msg, msgStr, advancedMsg } = i18n;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            headerNode={msg("loginTotpTitle")}
            displayMessage={!messagesPerField.existsError("totp", "userLabel")}
        >
            <>
                <ol id="kc-totp-settings" className="flex flex-col gap-2">
                    <li className="flex flex-col gap-2  border-b border-border pb-1">
                        <p className="text-sm">{msg("loginTotpStep1")}</p>

                        <ul id="kc-totp-supported-apps" className="flex flex-col gap-1 text-sm  divide-y divide-border">
                            {totp.supportedApplications.map(app => (
                                <li className="py-1" key={app}>
                                    {advancedMsg(app)}
                                </li>
                            ))}
                        </ul>
                    </li>

                    {mode == "manual" ? (
                        <>
                            <li className="flex flex-col gap-2">
                                <p className="text-sm">{msg("loginTotpManualStep2")}</p>
                                <div className="text-center bg-muted rounded-md px-3 py-2 mx-auto w-fit border border-border">
                                    <span id="kc-totp-secret-key" className="text-sm font-mono">
                                        {totp.totpSecretEncoded}
                                    </span>
                                </div>
                                <p className="text-center">
                                    <a href={totp.qrUrl} id="mode-barcode" className={buttonVariants({ variant: "link", size: "sm" })}>
                                        {msg("loginTotpScanBarcode")}
                                    </a>
                                </p>
                            </li>
                            <li className="flex flex-col gap-2 border-b border-border pb-1">
                                <p className="text-sm">{msg("loginTotpManualStep3")}</p>
                                <ul className="flex flex-col gap-1 text-sm divide-y divide-border">
                                    <li className="py-1" id="kc-totp-type">
                                        {msg("loginTotpType")}: {msg(`loginTotp.${totp.policy.type}`)}
                                    </li>
                                    <li className="py-1" id="kc-totp-algorithm">
                                        {msg("loginTotpAlgorithm")}: {totp.policy.getAlgorithmKey()}
                                    </li>
                                    <li className="py-1" id="kc-totp-digits">
                                        {msg("loginTotpDigits")}: {totp.policy.digits}
                                    </li>
                                    {totp.policy.type === "totp" ? (
                                        <li className="py-1" id="kc-totp-period">
                                            {msg("loginTotpInterval")}: {totp.policy.period}
                                        </li>
                                    ) : (
                                        <li className="py-1" id="kc-totp-counter">
                                            {msg("loginTotpCounter")}: {totp.policy.initialCounter}
                                        </li>
                                    )}
                                </ul>
                            </li>
                        </>
                    ) : (
                        <li className="flex flex-col gap-1">
                            <p className="text-xs text-center">{msg("loginTotpStep2")}</p>
                            <div className="flex items-center justify-center bg-muted rounded-md px-3 pt-3 pb-2 mx-auto w-fit border border-border flex-col gap-1">
                                <img
                                    id="kc-totp-secret-qr-code"
                                    src={`data:image/png;base64, ${totp.totpSecretQrCode}`}
                                    alt="Figure: Barcode"
                                    className="h-48 w-48 rounded-md mx-auto"
                                />

                                <a
                                    href={totp.manualUrl}
                                    id="mode-manual"
                                    className={buttonVariants({ variant: "outline", size: "sm", className: "w-full" })}
                                >
                                    {msg("loginTotpUnableToScan")}
                                </a>
                            </div>
                        </li>
                    )}
                    {/* <li className="flex flex-col gap-2">
                        <p className="text-sm">{msg("loginTotpStep3")}</p>
                        <p className="text-sm">{msg("loginTotpStep3DeviceName")}</p>
                    </li> */}
                </ol>

                <form action={url.loginAction} id="kc-totp-settings-form" method="post">
                    <div>
                        <div className={kcClsx("kcInputWrapperClass")}>
                            <Label htmlFor="totp" className="mb-4">
                                {msg("authenticatorCode")}
                                <span className="required">*</span>
                            </Label>
                        </div>
                        <div className="mx-auto w-full flex items-center justify-center">
                            <InputOTP maxLength={6} name="totp" id="totp" autoFocus aria-invalid={messagesPerField.existsError("totp")}>
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
                                className="text-red-500 text-center text-sm mt-2"
                                aria-live="polite"
                                dangerouslySetInnerHTML={{
                                    __html: kcSanitize(messagesPerField.get("totp"))
                                }}
                            />
                        )}
                        <input type="hidden" id="totpSecret" name="totpSecret" value={totp.totpSecret} />
                        {mode && <input type="hidden" id="mode" value={mode} />}
                    </div>

                    <div>
                        <div className="flex items-center gap-2 py-4">
                            <Label htmlFor="userLabel">{msg("loginTotpDeviceName")}</Label>{" "}
                            {totp.otpCredentials.length >= 1 && <span className="required">*</span>}
                        </div>
                        <div className={kcClsx("kcInputWrapperClass")}>
                            <Input
                                type="text"
                                id="userLabel"
                                name="userLabel"
                                autoComplete="off"
                                aria-invalid={messagesPerField.existsError("userLabel")}
                            />
                            {messagesPerField.existsError("userLabel") && (
                                <span
                                    id="input-error-otp-label"
                                    className="text-red-500 text-center text-sm mt-2"
                                    aria-live="polite"
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(messagesPerField.get("userLabel"))
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    <div className={kcClsx("kcFormGroupClass")}>
                        <LogoutOtherSessions kcClsx={kcClsx} i18n={i18n} />
                    </div>

                    {isAppInitiatedAction ? (
                        <>
                            <input
                                type="submit"
                                className={buttonVariants({ variant: "default", className: "w-full" })}
                                id="saveTOTPBtn"
                                value={msgStr("doSubmit")}
                            />
                            <button
                                type="submit"
                                className={buttonVariants({ variant: "outline", className: "w-full" })}
                                id="cancelTOTPBtn"
                                name="cancel-aia"
                                value="true"
                            >
                                {msg("doCancel")}
                            </button>
                        </>
                    ) : (
                        <input
                            type="submit"
                            className={buttonVariants({ variant: "default", className: "w-full" })}
                            id="saveTOTPBtn"
                            value={msgStr("doSubmit")}
                        />
                    )}
                </form>
            </>
        </Template>
    );
}

function LogoutOtherSessions(props: { kcClsx: KcClsx; i18n: I18n }) {
    const { i18n } = props;

    const { msg } = i18n;

    return (
        <div id="kc-form-options">
            <div className="flex items-center gap-2 py-4">
                <Checkbox id="logout-sessions" name="logout-sessions" value="on" defaultChecked={true} />
                <Label htmlFor="logout-sessions">{msg("logoutOtherSessions")}</Label>
            </div>
        </div>
    );
}
