import { Yoga$Node, Value, Layout, Size } from './entry-common';
import type { Yoga$Direction, Yoga$Align, Yoga$Edge, Yoga$Display, Yoga$FlexDirection, Yoga$JustifyContent, Yoga$Unit } from './YGEnums';
import CONSTANTS from './YGEnums';

export declare class YogaNode extends Yoga$Node {
    /**
     * iOS: YGLayout
     * Android: com.facebook.yoga.YogaLayout (I think)
     */
    public readonly native: any;
}

export type {
    Yoga$JustifyContent,
    Yoga$Align,
    Yoga$FlexDirection,
    Yoga$Direction,
    Yoga$FlexWrap,
    Yoga$Edge,
    Yoga$Display,
    Yoga$Unit,
    Yoga$Overflow,
    Yoga$PositionType,
    Yoga$ExperimentalFeature,
} from './YGEnums';
  
export type {Yoga$Node, Yoga$Config} from './entry-common';

/*
 * Based on entry-node.js and entry-common.js
 * @see https://github.com/facebook/yoga/blob/master/javascript/sources/entry-node.js
 * @see https://github.com/facebook/yoga/blob/master/javascript/sources/entry-common.js
 */
export default {
    // Config,
    Node: YogaNode,
    Layout,
    Size,
    Value,
    ...CONSTANTS,
    /** 
     * In this commit, getInstanceCount was removed from the implementation yet accidentally left in the typings.
     * @see https://github.com/facebook/yoga/commit/adff8d96dd8c0264202c34672c6dee8c0925445c#diff-c925400af6d5dc4ea64acb5bb45e54b953850abdb977708281f0f0fbff9a15a5
     */
    // getInstanceCount(): number,
};