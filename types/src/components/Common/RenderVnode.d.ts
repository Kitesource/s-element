declare const RenderVnode: import('vue').DefineComponent<{
    vNode: {
        type: (StringConstructor | ObjectConstructor)[];
        required: true;
    };
}, () => string | Record<string, any>, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    vNode: {
        type: (StringConstructor | ObjectConstructor)[];
        required: true;
    };
}>>, {}, {}>;
export default RenderVnode;
