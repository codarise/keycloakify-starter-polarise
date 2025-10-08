import { getKcClsx, type KcClsx } from "keycloakify/login/lib/kcClsx";
import { useScript } from "keycloakify/login/pages/LoginRecoveryAuthnCodeConfig.useScript";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { AlertDescription, AlertTitle, Alert } from "../../components/ui/alert";
import { buttonVariants } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import { CopyIcon, DownloadIcon, Printer } from "lucide-react";
export default function LoginRecoveryAuthnCodeConfig(props: PageProps<Extract<KcContext, { pageId: "login-recovery-authn-code-config.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { recoveryAuthnCodesConfigBean, isAppInitiatedAction } = kcContext;

    const { msg, msgStr } = i18n;

    const olRecoveryCodesListId = "kc-recovery-codes-list";

    useScript({ olRecoveryCodesListId, i18n });

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            headerNode={msg("recovery-code-config-header")}
        >
            <Alert variant="destructive" aria-label="Warning alert">
                <AlertTitle>
                    {msg("recovery-code-config-warning-title")}
                </AlertTitle>
                <AlertDescription>
                    {msg("recovery-code-config-warning-message")}
                </AlertDescription>
            </Alert>

            <ol id={olRecoveryCodesListId} className={kcClsx("kcRecoveryCodesList")}>
                {recoveryAuthnCodesConfigBean.generatedRecoveryAuthnCodesList.map((code, index) => (
                    <li key={index}>
                        <span>{index + 1}:</span> {code.slice(0, 4)}-{code.slice(4, 8)}-{code.slice(8)}
                    </li>
                ))}
            </ol>

            {/* actions */}
            <div className="grid grid-cols-3 gap-2">
                <button id="printRecoveryCodes" className={buttonVariants({ variant: "outline" })} type="button">
                    <Printer className="size-4" /> {msg("recovery-codes-print")}
                </button>
                <button id="downloadRecoveryCodes" className={buttonVariants({ variant: "outline" })} type="button">
                    <DownloadIcon className="size-4" /> {msg("recovery-codes-download")}
                </button>
                <button id="copyRecoveryCodes" className={buttonVariants({ variant: "outline" })} type="button">
                    <CopyIcon className="size-4" /> {msg("recovery-codes-copy")}
                </button>
            </div>

            {/* confirmation checkbox */}
            <div className={kcClsx("kcFormOptionsClass")}>
                <Label htmlFor="kcRecoveryCodesConfirmationCheck">
                    <Checkbox
                        id="kcRecoveryCodesConfirmationCheck"
                        name="kcRecoveryCodesConfirmationCheck"
                        onChange={event => {
                            //@ts-expect-error: This is inherited from the original code
                            document.getElementById("saveRecoveryAuthnCodesBtn").disabled = !event.target.checked;
                        }}
                    />
                    {msg("recovery-codes-confirmation-message")}
                </Label>
            </div>

            <form action={kcContext.url.loginAction} className="flex flex-col gap-4" id="kc-recovery-codes-settings-form" method="post">
                <input type="hidden" name="generatedRecoveryAuthnCodes" value={recoveryAuthnCodesConfigBean.generatedRecoveryAuthnCodesAsString} />
                <input type="hidden" name="generatedAt" value={recoveryAuthnCodesConfigBean.generatedAt} />
                <input type="hidden" id="userLabel" name="userLabel" value={msgStr("recovery-codes-label-default")} />

                <LogoutOtherSessions kcClsx={kcClsx} i18n={i18n} />

                {isAppInitiatedAction ? (
                    <>
                        <input
                            type="submit"
                            className={buttonVariants({ variant: "default", className: "w-full" })}
                            id="saveRecoveryAuthnCodesBtn"
                            value={msgStr("recovery-codes-action-complete")}
                            disabled
                        />
                        <button
                            type="submit"
                            className={buttonVariants({ variant: "outline", className: "w-full" })}
                            id="cancelRecoveryAuthnCodesBtn"
                            name="cancel-aia"
                            value="true"
                        >
                            {msg("recovery-codes-action-cancel")}
                        </button>
                    </>
                ) : (
                    <input
                        type="submit"
                        className={buttonVariants({ variant: "default", className: "w-full" })}
                        id="saveRecoveryAuthnCodesBtn"
                        value={msgStr("recovery-codes-action-complete")}
                        disabled
                    />
                )}
            </form>
        </Template>
    );
}

function LogoutOtherSessions(props: { kcClsx: KcClsx; i18n: I18n }) {
    const { kcClsx, i18n } = props;

    const { msg } = i18n;

    return (
        <div id="kc-form-options" className={kcClsx("kcFormOptionsClass")}>
            <div className={kcClsx("kcFormOptionsWrapperClass")}>
                <div className="checkbox">
                    <Label>
                        <Checkbox id="logout-sessions" name="logout-sessions" value="on" defaultChecked={true} />
                        {msg("logoutOtherSessions")}
                    </Label>
                </div>
            </div>
        </div>
    );
}
