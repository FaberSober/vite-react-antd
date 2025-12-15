import { Outlet } from 'react-router-dom';

export default function Unocss() {
  return (
    <div className="fa-full fa-flex-column">
      <div>UnoCSS Header</div>

      <div className="fa-flex1 fa-relative">
        <Outlet />
      </div>
    </div>
  );
}
