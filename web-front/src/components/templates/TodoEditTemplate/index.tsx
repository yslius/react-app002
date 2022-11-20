/**
 * TodoEditTemplate
 *
 * @package components
 */
import { useTodoContext } from '@/contexts/TodoContext';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import { InputForm } from '@/components/atoms/InputForm/';
import { TextArea } from '@/components/atoms/TextArea/';
import { CommonButton } from '@/components/atoms/CommonButton/';
import { useTodoEditTemplate } from './useTodoEditTemplate';
import styles from './styles.module.css';

/**
 * TodoEditTemplate
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoEditTemplate = () => {
  const { originTodoList, updateTodo } = useTodoContext();

  const [
    { todo, inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleUpdateTodo }
  ] = useTodoEditTemplate({ originTodoList, updateTodo });

  return (
    <BaseLayout title={'編集画面'}>
      {!!todo && (
        <form className={styles.container} onSubmit={handleUpdateTodo}>
          <div className={styles.area}>
            <InputForm
              value={inputTitle}
              placeholder={'タイトル'}
              onChange={handleChangeTitle}
            />
          </div>
          <div className={styles.area}>
            <TextArea
              value={inputContent}
              placeholder={'内容'}
              onChange={handleChangeContent}
            />
          </div>
          <div className={styles.area}>
            <CommonButton type='submit' title='決定' />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};
