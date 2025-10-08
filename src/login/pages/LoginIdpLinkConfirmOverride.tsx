import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";

export default function LoginIdpLinkConfirmOverride(props: PageProps<Extract<KcContext, { pageId: "login-idp-link-confirm-override.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;


    const { url, idpDisplayName } = kcContext;

    const { msg } = i18n;

    return (
        <Template kcContext={kcContext} i18n={i18n} doUseDefaultCss={doUseDefaultCss} classes={classes} headerNode={msg("confirmOverrideIdpTitle")}>
            <form id="kc-register-form" action={url.loginAction} method="post">
                 <p className="text-sm pb-2">{msg("pageExpiredMsg1")}{" "}</p>
                <a id="loginRestartLink" href={url.loginRestartFlowUrl} className={buttonVariants({ variant: "outline", className: "w-full" })}>
                    {msg("doClickHere")}
                </a>
                <br />
                <br />
                <button
                    type="submit"
                    className={buttonVariants({ variant: "default", className: "w-full" })}
                    name="submitAction"
                    id="confirmOverride"
                    value="confirmOverride"
                >
                    {msg("confirmOverrideIdpContinue", idpDisplayName)}
                </button>
            </form>
        </Template>
    );
}
