import * as React from 'react';
import './index.scss';
interface IProps {
    type?: keyof typeof departmentType;
}
declare const departmentType: {
    fade: string;
    fade2: string;
    dots: string;
    accessory: string;
    pill: string;
    bookends: string;
    flair: string;
    wave: string;
    shine: string;
    charlie: string;
    stars: string;
    'vertical-lines': string;
    'horizontal-lines': string;
    'slash-1': string;
    'slash-2': string;
    'slash-3': string;
    'bookends-dots': string;
};
declare const HrDepartment: React.NamedExoticComponent<IProps>;
export default HrDepartment;
