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
import * as Card from "../components/ui/card";
import { Alert } from "../components/ui/alert";
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
        <div className="mx-auto h-screen flex flex-col justify-between items-center p-0 md:p-4 relative">
            <div className="fixed bottom-0 left-0 w-full flex justify-center pointer-events-none">
                <img src={logo} alt="logo" className="w-1/2 py-2 invert dark:invert-0 opacity-2 drop-shadow-lg" />
            </div>
            <div className="fixed bottom-0 left-0 w-full h-full bg-radial-[at_50%_100%] from-[var(--ai-teal)]/30 via-transparent to-transparent animate-[pulse_5s_ease-in-out_infinite] -z-10" />
            <div />
            <div className="flex flex-col items-center justify-between w-full">
                <Card.Card className="w-full max-w-md backdrop-blur-sm border border-border/50 bg-card/10 pt-0">
                    <Card.CardHeader className="flex items-center justify-between border-b border-border/50 bg-card pt-4 rounded-t-xl">
                        <Card.CardTitle className="p-0">
                            <div id="kc-header">
                                <div id="kc-header-wrapper" className="flex items-center justify-center">
                                    <img src={logo} alt="logo" className="w-18 invert dark:invert-0" />
                                </div>
                            </div>
                        </Card.CardTitle>
                        <ModeToggle />
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
                                        <h1 id="kc-page-title" className="text-xl text-center mb-8">
                                            {headerNode}
                                        </h1>
                                    ) : (
                                        <div id="kc-username" className="flex items-center justify-between gap-2 mb-4">
                                            <label id="kc-attempted-username" className="text-sm">
                                                {auth.attemptedUsername}
                                            </label>
                                            <a
                                                id="reset-login"
                                                href={url.loginRestartFlowUrl}
                                                aria-label={msgStr("restartLoginTooltip")}
                                                className={buttonVariants({ variant: "link", size: "sm" })}
                                            >
                                                <div className="flex items-center justify-center gap-2">
                                                    <RefreshCwIcon className="w-4 h-4" />
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
                                        <Alert
                                            variant={
                                                message.type === "success"
                                                    ? "default"
                                                    : message.type === "warning"
                                                      ? "destructive"
                                                      : message.type === "error"
                                                        ? "destructive"
                                                        : "default"
                                            }
                                        >
                                            <div className="flex items-center justify-center gap-2">
                                                {message.type === "success" && <CheckCircleIcon className="w-4 h-4" />}
                                                {message.type === "warning" && <AlertCircleIcon className="w-4 h-4" />}
                                                {message.type === "error" && <XCircleIcon className="w-4 h-4" />}
                                                {message.type === "info" && <InfoIcon className="w-4 h-4" />}
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
                                            <div>
                                                <input type="hidden" name="tryAnotherWay" value="on" />
                                                <button
                                                    className={buttonVariants({ variant: "outline", size: "sm", className: "w-full" })}
                                                    id="try-another-way"
                                                    onClick={() => {
                                                        document.forms["kc-select-try-another-way-form" as never].submit();
                                                        return false;
                                                    }}
                                                >
                                                    {msg("doTryAnotherWay")}
                                                </button>
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
                <span className="text-xs text-muted-foreground text-center mt-4">
                    By clicking continue, you agree to our <br />
                    <a href="https://polarise.eu/terms-and-conditions" className="underline">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="https://polarise.eu/privacy-policy" className="underline">
                        Privacy Policy
                    </a>
                    .
                </span>
            </div>
            <div className="pt-4 mx-auto">
                <div className="flex items-center justify-center gap-4">
                    <span className="text-xs text-muted-foreground">Polarise {new Date().getFullYear()}</span>
                </div>
            </div>
        </div>
    );
}
