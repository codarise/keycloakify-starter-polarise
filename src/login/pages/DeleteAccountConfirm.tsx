import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";
import { Alert } from "../../components/ui/alert";

export default function DeleteAccountConfirm(props: PageProps<Extract<KcContext, { pageId: "delete-account-confirm.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

 

    const { url, triggered_from_aia } = kcContext;

    const { msg, msgStr } = i18n;

    return (
        <Template kcContext={kcContext} i18n={i18n} doUseDefaultCss={doUseDefaultCss} classes={classes} headerNode={msg("deleteAccountConfirm")}>
            <form action={url.loginAction} className="form-vertical flex flex-col gap-4" method="post">
                <Alert variant="destructive">
                    <span className="pficon pficon-warning-triangle-o"></span>
                    {msg("irreversibleAction")}
                </Alert>
                <p className="text-sm">{msg("deletingImplies")}</p>
                <ul
                    className="text-sm list-disc list-inside"
                >
                    <li>{msg("loggingOutImmediately")}</li>
                    <li>{msg("errasingData")}</li>
                </ul>
                <p className="delete-account-text text-sm text-destructive">{msg("finalDeletionConfirmation")}</p>
                <div id="kc-form-buttons" className="flex flex-col gap-4">
                    <input
                        className={buttonVariants({ variant: "destructive", className: "w-full" })}
                        type="submit"
                        value={msgStr("doConfirmDelete")}
                    />
                    {triggered_from_aia && (
                        <button
                            className={buttonVariants({ variant: "outline", className: "w-full" })}
                            type="submit"
                            name="cancel-aia"
                            value="true"
                        >
                            {msgStr("doCancel")}
                        </button>
                    )}
                </div>
            </form>
        </Template>
    );
}
