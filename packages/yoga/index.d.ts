import type { Yoga$Node } from './entry-common';

export declare class YogaNode extends Yoga$Node {
    /**
     * iOS: YGLayout
     * Android: com.facebook.yoga.YogaLayout (I think)
     */
    public readonly native: any;
}