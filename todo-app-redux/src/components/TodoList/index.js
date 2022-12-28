import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../../redux/actions.js';
import todosSlice from './todosSlice';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { filltersTodos } from '../../redux/selectors';
export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [prioriry, setPrioriry] = useState('Medium');

  const todoLists = useSelector(filltersTodos);

  const dispatch = useDispatch();
  const handlerAddButton = () => {
    dispatch(
      todosSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: prioriry,
      })
    );
    setTodoName('');
    setPrioriry('Medium');
  };
  const handlerInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlerPriorityChange = (value) => {
    setPrioriry(value);
  };
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" /> */}
        {todoLists.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            name={item.name}
            prioriry={item.priority}
            completed={item.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handlerInputChange} />
          <Select
            defaultValue="Medium"
            value={prioriry}
            onChange={handlerPriorityChange}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handlerAddButton}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
