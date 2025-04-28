import { useEffect } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useInitialize } from "keycloakify/login/Template.useInitialize";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";
import logo from "../images/pola-logo-dark.svg";
import { RefreshCwIcon, CheckCircleIcon, AlertCircleIcon, XCircleIcon, InfoIcon } from "lucide-react";
import * as Card from "../components/ui/card"
import { Alert } from "../components/ui/alert"
import { buttonVariants } from "../components/ui/button";
import { ModeToggle } from "../components/mode-toggle";



export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayInfo = false,
        displayMessage = true,
        displayRequiredFields = false,
        headerNode,
        socialProvidersNode = null,
        infoNode = null,
        documentTitle,
        bodyClassName,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children
    } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { msg, msgStr } = i18n;

    const { auth, url, message, isAppInitiatedAction } = kcContext;

    useEffect(() => {
        document.title = documentTitle ?? msgStr("loginTitle", kcContext.realm.displayName);
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: bodyClassName ?? kcClsx("kcBodyClass")
    });

    const { isReadyToRender } = useInitialize({ kcContext, doUseDefaultCss });

    if (!isReadyToRender) {
        return null;
    }

    return (
        <div className="mx-auto h-screen flex flex-col justify-between items-center bg-radial-[at_50%_0%] from-[var(--ai-teal)]/30 via-transparent to-transparent p-0 md:p-4">
            <div className="flex items-center justify-between"></div>
            <Card.Card className="w-full max-w-md bg-card/50 backdrop-blur-sm border border-border/50">
                <Card.CardHeader>
                    <Card.CardTitle>
                        <div id="kc-header">
                            <div id="kc-header-wrapper" className="flex items-center justify-center">
                                <img src={logo} alt="logo" className="w-18 py-2 invert dark:invert-0" />
                            </div>
                        </div>
                    </Card.CardTitle>
                </Card.CardHeader>
                <Card.CardContent>
                    <div className="grid grid-cols-1 items-center justify-center flex-col">
                        <header className={kcClsx("kcFormHeaderClass")}>
                            {/* {enabledLanguages.length > 1 && (
                                <div className={kcClsx("kcLocaleMainClass")} id="kc-locale">
                                    <div id="kc-locale-wrapper" className={kcClsx("kcLocaleWrapperClass")}>
                                        <div id="kc-locale-dropdown" className={clsx("menu-button-links", kcClsx("kcLocaleDropDownClass"))}>
                                            <button
                                                tabIndex={1}
                                                id="kc-current-locale-link"
                                                aria-label={msgStr("languages")}
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                aria-controls="language-switch1"
                                            >
                                                {currentLanguage.label}
                                            </button>
                                            <ul
                                                role="menu"
                                                tabIndex={-1}
                                                aria-labelledby="kc-current-locale-link"
                                                aria-activedescendant=""
                                                id="language-switch1"
                                                className={kcClsx("kcLocaleListClass")}
                                            >
                                                {enabledLanguages.map(({ languageTag, label, href }, i) => (
                                                    <li key={languageTag} className={kcClsx("kcLocaleListItemClass")} role="none">
                                                        <a role="menuitem" id={`language-${i + 1}`} className={kcClsx("kcLocaleItemClass")} href={href}>
                                                            {label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )} */}
                            {(() => {
                                const node = !(auth !== undefined && auth.showUsername && !auth.showResetCredentials) ? (
                                    <h1 id="kc-page-title" className="text-xl text-center mb-8">{headerNode}</h1>
                                ) : (
                                    <div id="kc-username" className="flex items-center justify-between gap-2 mb-4">
                                        <label id="kc-attempted-username" className="text-sm">{auth.attemptedUsername}</label>
                                        <a id="reset-login" href={url.loginRestartFlowUrl} aria-label={msgStr("restartLoginTooltip")} className={buttonVariants({ variant: "link", size: "sm" })}>
                                            <div className="flex items-center justify-center gap-2">
                                                <RefreshCwIcon className="w-4 h-4"/>
                                                <span className="text-sm">{msg("restartLoginTooltip")}</span>
                                            </div>
                                        </a>
                                    </div>
                                );

                                if (displayRequiredFields) {
                                    return (
                                        <div>    
                                            <div className="w-full">{node}</div>
                                            <div className="flex items-center justify-end gap-2">
                                                <span className="text-sm">
                                                    <span className="required">*</span>
                                                    {msg("requiredFields")}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                }

                                return node;
                            })()}
                        </header>
                        <div id="kc-content">
                            <div id="kc-content-wrapper" className="flex flex-col gap-4">
                                {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
                                {displayMessage && message !== undefined && (message.type !== "warning" || !isAppInitiatedAction) && (
                                    <Alert variant={message.type === "success" ? "default" : message.type === "warning" ? "destructive" : message.type === "error" ? "destructive" : "default"}>
                                        <div className="flex items-center justify-center gap-2">
                                            {message.type === "success" && <CheckCircleIcon className="w-4 h-4"/>}
                                            {message.type === "warning" && <AlertCircleIcon className="w-4 h-4"/>}
                                            {message.type === "error" && <XCircleIcon className="w-4 h-4"/>}
                                            {message.type === "info" && <InfoIcon className="w-4 h-4"/>}
                                        </div>
                                        <span
                                            className={kcClsx("kcAlertTitleClass")}
                                            dangerouslySetInnerHTML={{
                                                __html: kcSanitize(message.summary)
                                            }}
                                        />
                                    </Alert>
                                )}
                                {children}
                                {auth !== undefined && auth.showTryAnotherWayLink && (
                                    <form id="kc-select-try-another-way-form" action={url.loginAction} method="post">
                                        <div className={kcClsx("kcFormGroupClass")}>
                                            <input type="hidden" name="tryAnotherWay" value="on" />
                                            <a
                                                href="#"
                                                id="try-another-way"
                                                onClick={() => {
                                                    document.forms["kc-select-try-another-way-form" as never].submit();
                                                    return false;
                                                }}
                                            >
                                                {msg("doTryAnotherWay")}
                                            </a>
                                        </div>
                                    </form>
                                )}
                                {socialProvidersNode}
                                {displayInfo && (
                                    <div id="kc-info">
                                        <div id="kc-info-wrapper" className="flex flex-col gap-2 text-sm">
                                            {infoNode}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Card.CardContent>
            </Card.Card>

            <div className="flex items-center justify-between max-w-md w-full border-t border-border/75 pt-4">
                <span className="text-sm text-muted-foreground">Polarise Cloud 2025</span>
                <ModeToggle />
            </div>

        </div>
    );
}
