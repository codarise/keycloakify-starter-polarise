import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { Input } from "../../components/ui/input";
import { Label } from "@/components/ui/label";

export default function Code(props: PageProps<Extract<KcContext, { pageId: "code.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { code } = kcContext;

    const { msg } = i18n;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            headerNode={code.success ? msg("codeSuccessTitle") : msg("codeErrorTitle", code.error)}
        >
            <div id="kc-code">
                {code.success ? (
                    <>
                        <Label className="pb-2">{msg("copyCodeInstruction")}</Label>
                        <Input id="code" defaultValue={code.code} />
                    </>
                ) : (
                    code.error && (
                        <p
                            id="error"
                            className="text-destructive text-sm"
                            dangerouslySetInnerHTML={{
                                __html: kcSanitize(code.error)
                            }}
                        />
                    )
                )}
            </div>
        </Template>
    );
}
