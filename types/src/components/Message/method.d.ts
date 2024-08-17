import { CreateMessageProps, MessageContext } from './types';

export declare const createMessage: (props: CreateMessageProps) => {
    id: string;
    vnode: import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
        [key: string]: any;
    }>;
    vm: import('vue').ComponentInternalInstance;
    props: {
        id: string;
        zIndex: number;
        onDestory: () => void;
        type?: "success" | "warning" | "danger" | "info" | undefined;
        offset?: number | undefined;
        message?: string | import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
            [key: string]: any;
        }> | undefined;
        duration?: number | undefined;
        showClose?: boolean | undefined;
        transitionName?: string | undefined;
    };
    destory: () => void;
};
export declare const getLastInstance: () => MessageContext | undefined;
export declare const getLastBottomOffset: (id: string) => any;
export declare const closeAll: () => void;
