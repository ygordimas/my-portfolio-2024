import { WarningTriangle } from 'iconoir-react';

const ErrorWarning = ({ message }) => {
  return (
    <div className="flex gap-1 text-xs items-center">
      <span className="bg-paper-light rounded-full p-1">
        <WarningTriangle className="text-red-600" />
      </span>
      <p className="text-red-600">{message}</p>
    </div>
  );
};

export default ErrorWarning;
