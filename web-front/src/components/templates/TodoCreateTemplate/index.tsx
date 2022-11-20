/**
 * TodoCreateTemplate
 *
 * @package components
 */
import { useTodoContext } from '@/contexts/TodoContext';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import { InputForm } from '@/components/atoms/InputForm';
import { TextArea } from '@/components/atoms/TextArea';
import { CommonButton } from '@/components/atoms/CommonButton';
import { useTodoCreateTemplate } from './useTodoCreateTemplate';
import styles from './styles.module.css';

/**
 * TodoCreateTemplate
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoCreateTemplate = () => {
  const { addTodo } = useTodoContext();
  const [
    { inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleCreateTodo }
  ] = useTodoCreateTemplate({ addTodo });

  return (
    <BaseLayout title={'新規作成画面'}>
      <form className={styles.container} onSubmit={handleCreateTodo}>
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
          <CommonButton type='submit' title='作成' />
        </div>
      </form>
    </BaseLayout>
  );
};
