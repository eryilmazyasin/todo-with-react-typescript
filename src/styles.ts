import { css } from "@emotion/css";

export default {
  container: css`
    padding: 25px 0;
  `,
  input: css`
    /* margin-top: 20px; */
  `,
  noItem: css`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  todoList: css`
    width: 100%;
    padding: 5px 10px 0 10px;
  `,

  todoListInfo: css`
    height: 30px;
    width: 100%;
    text-align: right;
    color: #333333;
    margin-top: 10px;

    .deletedSpan {
      color: #d34545;
    }
  `,
};
