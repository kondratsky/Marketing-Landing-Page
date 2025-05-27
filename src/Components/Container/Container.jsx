import s from "./Container.module.scss";

export function Container({ children, className }) {
  return <div className={`${s.container} ${className || ""}`}>{children}</div>;
}

export function withContainer(WrappedComponent) {
  return function WithContainerComponent(props) {
    const { className, ...componentProps } = props;

    return (
      <Container className={className}>
        <WrappedComponent {...componentProps} />
      </Container>
    );
  };
}

export default Container;
