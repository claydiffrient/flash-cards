export default function generator({ colors, spacing, breakpoints }) {
  return {
    bgColor: colors.porcelain,
    padding: spacing.xSmall,
    width: breakpoints.small,
    height: breakpoints.xSmall
  };
}
