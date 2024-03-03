import React from "react";
import "./CommentsPage.css";
function CommentsPage() {
  return (
    <div className="comments-page">
      <h1 className="comments__title">FOYDALANUVCHILAR ORASIDAGI RO`YXAT</h1>
      <div className="comments__container">
        {/* Row 1 */}
        <div className="comments__col-1">T/r</div>
        <div className="comments__col-2">Xizmat beruvchilar</div>
        <div className="comments__col-3">Xizmat oluvchilar</div>
        <div className="comments__col-4">Sharhlar</div>
        <div className="comments__col-5">Vaqt</div>
        <div className="comments__col-6">Harakat</div>
        <div className=""></div>
        {/* Row 2 */}
        <div className="comments__col-2-2">Ism-sharifi</div>
        <div className="comments__col-2-3">ID raqami</div>
        <div className="comments__col-3-4">Ism-sharifi</div>
        <div className="comments__col-3-5">ID raqami</div>
        {/* Row 3 */}
        <div className="comments__col-2-2-2">
          <input type="text" />
        </div>
        <div className="comments__col-2-3-3">
          <input type="text" />
        </div>
        <div className="comments__col-3-4-4">
          <input type="text" />
        </div>
        <div className="comments__col-3-5-5">
          <input type="text" />
        </div>
        <div className="comments__col-5-6-6">
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default CommentsPage;
