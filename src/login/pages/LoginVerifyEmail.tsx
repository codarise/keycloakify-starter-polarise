import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";
export default function LoginVerifyEmail(props: PageProps<Extract<KcContext, { pageId: "login-verify-email.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { msg } = i18n;

    const { url, user } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayInfo
            headerNode={msg("emailVerifyTitle")}
            infoNode={
                <div className="flex flex-col gap-2">
                    {msg("emailVerifyInstruction2")}
                    <div className="flex items-center gap-2">
                        <a href={url.loginAction} className={buttonVariants({ variant: "outline", size: "sm" })}>
                            {msg("doClickHere")}
                        </a>
                        {msg("emailVerifyInstruction3")}
                    </div>
                </div>
            }
        >
            <p className="text-sm py-2">{msg("emailVerifyInstruction1", user?.email ?? "")}</p>
        </Template>
    );
}
