import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";

export default function SelectAuthenticator(props: PageProps<Extract<KcContext, { pageId: "select-authenticator.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;
    const { url, auth } = kcContext;

    const { msg, advancedMsg } = i18n;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayInfo={false}
            headerNode={msg("loginChooseAuthenticator")}
        >
            <form id="kc-select-credential-form" action={url.loginAction} method="post">
                <div className="flex flex-col gap-4">
                    {auth.authenticationSelections.map((authenticationSelection, i) => (<div className="flex flex-col gap-2">
                        <button
                            key={i}
                            className={buttonVariants({ variant: "outline", className: "w-full" })}
                            type="submit"
                            name="authenticationExecution"
                            value={authenticationSelection.authExecId}
                        >
                            <div>
                                <i className={` ${authenticationSelection.iconCssClass}`} />
                            </div>
                            <div>
                                <div>{advancedMsg(authenticationSelection.displayName)}</div>
                            </div>
                            <div />
                            <div>
                                <i />
                            </div>
                        </button>
                    <span className="text-sm text-muted-foreground">{advancedMsg(authenticationSelection.helpText)}</span></div>

                    ))}
                </div>
            </form>
        </Template>
    );
}
