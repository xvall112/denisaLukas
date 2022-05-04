interface ParallaxProps {
  /**
   * External classes
   */
  className?: string;
  /**
   * The content
   */
  children?: JSX.Element;
  /**
   * The parallax background image
   */
  backgroundImage: any;

  // All other props
  [x:string]: any;
}