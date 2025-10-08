import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Label } from "../../components/ui/label";
import { buttonVariants } from "../../components/ui/button";

export default function LoginX509Info(props: PageProps<Extract<KcContext, { pageId: "login-x509-info.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { url, x509 } = kcContext;

    const { msg, msgStr } = i18n;

    return (
        <Template kcContext={kcContext} i18n={i18n} doUseDefaultCss={doUseDefaultCss} classes={classes} headerNode={msg("doLogIn")}>
            <form id="kc-x509-login-info" className="flex flex-col gap-4" action={url.loginAction} method="post">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="certificate_subjectDN" >
                            {msg("clientCertificate")}
                        </Label>
                    </div>
                    {x509.formData.subjectDN ? (
                        <div className="flex flex-col gap-2">
                            <Label id="certificate_subjectDN" >
                                {x509.formData.subjectDN}
                            </Label>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <Label id="certificate_subjectDN" >
                                {msg("noCertificate")}
                            </Label>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-4">
                    {x509.formData.isUserEnabled && (
                        <>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="username">
                                    {msg("doX509Login")}
                                </Label>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label id="username" >
                                    {x509.formData.username}
                                </Label>
                            </div>
                        </>
                    )}
                </div>
                <div className={kcClsx("kcFormGroupClass")}>
                    <div id="kc-form-options" className={kcClsx("kcFormOptionsClass")}>
                        <div className={kcClsx("kcFormOptionsWrapperClass")} />
                    </div>
                    <div id="kc-form-buttons" className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <input
                                className={buttonVariants({ variant: "default", className: "w-full" })}
                                name="login"
                                id="kc-login"
                                type="submit"
                                value={msgStr("doContinue")}
                            />
                            {x509.formData.isUserEnabled && (
                                <input
                                    className={buttonVariants({ variant: "outline", className: "w-full" })}
                                    name="cancel"
                                    id="kc-cancel"
                                    type="submit"
                                    value={msgStr("doIgnore")}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </Template>
    );
}
