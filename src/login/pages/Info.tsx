import type { PageProps } from "keycloakify/login/pages/PageProps";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";

export default function Info(props: PageProps<Extract<KcContext, { pageId: "info.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { advancedMsgStr, msg } = i18n;

    const { messageHeader, message, requiredActions, skipLink, pageRedirectUri, actionUri, client } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={false}
            headerNode={
                <span
                    dangerouslySetInnerHTML={{
                        __html: kcSanitize(messageHeader ?? message.summary)
                    }}
                />
            }
        >
            <div id="kc-info-message">
                <p
                    className="instruction text-sm pb-4"
                    dangerouslySetInnerHTML={{
                        __html: kcSanitize(
                            (() => {
                                let html = message.summary?.trim();

                                if (requiredActions) {
                                    html += " <b>";

                                    html += requiredActions.map(requiredAction => advancedMsgStr(`requiredAction.${requiredAction}`)).join(", ");

                                    html += "</b>";
                                }

                                return html;
                            })()
                        )
                    }}
                />
                {(() => {
                    if (skipLink) {
                        return null;
                    }

                    if (pageRedirectUri) {
                        return (
                            <p>
                                <a href={pageRedirectUri} className={buttonVariants({ variant: "outline", className: "w-full" })}>{msg("backToApplication")}</a>
                            </p>
                        );
                    }
                    if (actionUri) {
                        return (
                            <p>
                                <a href={actionUri} className={buttonVariants({ variant: "outline", className: "w-full" })}>{msg("proceedWithAction")}</a>
                            </p>
                        );
                    }

                    if (client.baseUrl) {
                        return (
                            <p>
                                <a href={client.baseUrl} className={buttonVariants({ variant: "outline", className: "w-full" })}>{msg("backToApplication")}</a>
                            </p>
                        );
                    }
                })()}
            </div>
        </Template>
    );
}
