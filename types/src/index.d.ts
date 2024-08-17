import { App } from 'vue';
import { default as Button } from './components/Button';
import { default as Collapse, CollapseItem } from './components/Collapse';
import { default as Dropdown } from './components/Dropdown';
import { default as Form, FormItem } from './components/Form';
import { default as Icon } from './components/Icon';
import { default as Message, createMessage, closeAll as closeMessageAll } from './components/Message';
import { default as Input } from './components/Input';
import { default as Select } from './components/Select';
import { default as Switch } from './components/Switch';
import { default as Tooltip } from './components/Tooltip';

export { install, Button, Collapse, CollapseItem, Dropdown, Form, FormItem, Icon, Message, Input, Select, Switch, Tooltip, createMessage, closeMessageAll };
declare const install: (app: App) => void;
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
