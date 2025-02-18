import { Component, ErrorInfo, ReactNode } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import style from "./ErrorBoundary.module.scss";
// import debtErr from "../../assets/svg/debtErr.svg";

interface ErrorBoundaryProps {
  children: ReactNode;
  navigate: NavigateFunction;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.log(error)
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  
  handleReload = () => {
    this.props.navigate("/");
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={style.boxError}>
          <h3 className={style.title}>Ошибка 404</h3>
          <p className={style.descr}>
            Кажется что-то пошло не так!<br/>
            Попробуйте перезагрузить страницу.
          </p>
          <button className={style.btn} onClick={this.handleReload}>Перезагрузить</button>
        </div>
      );
    }

    return this.props.children;
  }
}

const ErrorBoundaryWithNavigate = (props: { children: ReactNode }) => {
  const navigate = useNavigate();
  return <ErrorBoundary navigate={navigate} {...props} />;
};

export default ErrorBoundaryWithNavigate;
