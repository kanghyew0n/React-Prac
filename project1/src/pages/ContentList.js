import "./ContentList.css";

function ContentList({ content, handleFilter, idx }) {
  return (
    <div className="ContentList">
      <div className="content__item">
        <li className="contents__list" key={content.id}>
          <div className="username">{content.username}</div>
          <div
            className="title"
            onClick={() => handleFilter(content.username, idx)}
          >
            {content.title}
          </div>
          <div className="createAt">{content.createdAt}</div>
        </li>
      </div>
    </div>
  );
}

export default ContentList;
