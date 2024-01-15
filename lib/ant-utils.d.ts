import type { App } from 'antd';
import type { NavigateFunction } from 'react-router-dom';
export declare const utils: ReturnType<typeof App.useApp> & {
    navigate: NavigateFunction;
};
