import { useEffect } from "react";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

export default function FrontchannelLogout(props: PageProps<Extract<KcContext, { pageId: "frontchannel-logout.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { logout } = kcContext;

    const { msg, msgStr } = i18n;

    useEffect(() => {
        if (logout.logoutRedirectUri) {
            window.location.replace(logout.logoutRedirectUri);
        }
    }, []);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            documentTitle={msgStr("frontchannel-logout.title")}
            headerNode={msg("frontchannel-logout.title")}
        >
            <p className="text-sm text-muted-foreground">{msg("frontchannel-logout.message")}</p>
            <ul className="flex flex-col gap-2">
                {logout.clients.map(client => (
                    <li key={client.name} className="bg-card/50 border border-border/50 rounded-lg p-2">
                        {client.name}
                        <iframe src={client.frontChannelLogoutUrl} style={{ display: "none" }} />
                    </li>
                ))}
            </ul>
            {logout.logoutRedirectUri && (
                <a id="continue" className="btn btn-primary" href={logout.logoutRedirectUri}>
                    {msg("doContinue")}
                </a>
            )}
        </Template>
    );
}
