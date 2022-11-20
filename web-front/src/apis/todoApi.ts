import { AxiosResponse } from 'axios';
import { globalAxios, isAxiosError } from '@/apis/config';
import { TodoType } from '@/interfaces/Todo';

/**
 * Todoリスト取得のAPI接続処理
 * @returns
 */
export const fetchTodoListApi = async () => {
  try {
    const { data }: AxiosResponse<Array<TodoType>> = await globalAxios.get('/todo');
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.code;
    }
  }
};

/**
 * idに紐づく単一のTodo取得のAPI接続処理
 * @param id
 * @returns
 */
export const fetchTodoDetailApi = async (id: number) => {
  try {
    const { data }: AxiosResponse<TodoType> = await globalAxios.get(`/todo/${id}`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.code;
    }
  }
};

/**
 * Todo新規登録のAPI接続処理
 * @param title
 * @param content
 * @returns
 */
export const createTodoApi = async (title: string, content: string) => {
  try {
    const { data }: AxiosResponse<TodoType> = await globalAxios.post('/todo', {
      title,
      content,
    });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.code;
    }
  }
};

/**
 * Todo更新のAPI接続処理
 * @param id
 * @param title
 * @param content
 * @returns
 */
export const updateTodoApi = async (id: number, title: string, content: string) => {
  try {
    const { data }: AxiosResponse<TodoType> = await globalAxios.patch(`/todo/${id}`, {
      title,
      content,
    });
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.code;
    }
  }
};

/**
 * Todo削除のAPI接続処理
 * @param id
 * @returns
 */
export const deleteTodoApi = async (id: number) => {
  try {
    const { data }: AxiosResponse<TodoType> = await globalAxios.delete(`/todo/${id}`);
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      return err.code;
    }
  }
};
