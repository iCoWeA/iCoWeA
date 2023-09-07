import React, { type ChangeEvent, type FC, useEffect, useReducer } from 'react';
import { deepClone } from '../../../lib/simpleComponents/utils/propsHelper';
import { useSubmit } from 'react-router-dom';
import Card from '../../../lib/simpleComponents/components/UI/Card/Card';

import Icon from '../../../lib/simpleComponents/components/UI/Icon/Icon';
import IconButton from '../../../lib/simpleComponents/components/UI/IconButton/IconButton';
import MessagesList from './MessagesList';
import Container from '../../../lib/simpleComponents/components/UI/Container/Container';

import CardHeader from '../../../lib/simpleComponents/components/UI/Card/CardHeader';

import CardBody from '../../../lib/simpleComponents/components/UI/Card/CardBody';
import Input from '../../../lib/simpleComponents/components/UI/Input/Input';
import Typography from '../../../lib/simpleComponents/components/UI/Typography/Typography';
import Select from '../../../lib/simpleComponents/components/UI/Select/Select';
import Option from '../../../lib/simpleComponents/components/UI/Option/Option';

enum FilterDates {
  ANY,
  WEEK,
  MONTH,
  HALF_YEAR,
  YEAR
}

enum ActionTypes {
  SET_FILTER,
  SET_DATE,
  SET_MESSAGE
}

interface State {
  filter: string;
  filterDate: FilterDates;
  messages: Record<string, Message> | null;
}

interface Action {
  type: ActionTypes;
  payload: {
    messages: Record<string, Message> | null;
    filter?: string;
    filterDate?: FilterDates;
  };
}

interface MessagesCardProps {
  children: Record<string, Message> | null;
}

const filterMessages = (messages: Record<string, Message> | null, filter: string, filterDate: FilterDates): Record<string, Message> | null => {
  if (messages === null || (filter === '' && filterDate === FilterDates.ANY)) {
    return messages;
  }

  const newMessages: Record<string, Message> = {};

  for (const key in messages) {
    if (filter !== '' && filterDate === FilterDates.ANY && messages[key].name.toLowerCase().startsWith(filter)) {
      newMessages[key] = messages[key];
    }
  }

  return newMessages;
};

const reducer = (prevState: State, { type, payload: { messages, filter = '', filterDate = FilterDates.ANY } }: Action): State => {
  const state = deepClone(prevState);

  if (type === ActionTypes.SET_FILTER) {
    state.filter = filter;
    state.messages = filterMessages(messages, state.filter, state.filterDate);
  }

  if (type === ActionTypes.SET_DATE) {
    state.filterDate = filterDate;
    state.messages = filterMessages(messages, state.filter, state.filterDate);
  }

  if (type === ActionTypes.SET_MESSAGE) {
    state.messages = filterMessages(messages, state.filter, state.filterDate);
  }

  return state;
};

const MessagesCard: FC<MessagesCardProps> = ({ children }) => {
  const submit = useSubmit();

  const initialState: State = {
    messages: children,
    filter: '',
    filterDate: FilterDates.ANY
  };
  const [{ messages, filter }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ActionTypes.SET_MESSAGE, payload: { messages: children } });
  }, [children]);

  /* Set seatch input props */
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: ActionTypes.SET_FILTER, payload: { messages: children, filter: event.currentTarget.value } });
  };

  /* Set icon button props */
  const refetchMessagesHandler = (): void => {
    submit(null, { method: 'GET' });
  };

  // const [value, setValue] = useState('value');
  // const [isDisabled, setIsDisabled] = useState(false);

  // const ref = useRef<HTMLButtonElement | null>(null);

  return (
    <Card className="col-span-4 w-full md:col-span-8 lg:col-span-12">
      <Select label="label">
        <div className='p-4'>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        </div>
      </Select>
      <CardHeader>
        <Container className="flex-col gap-4 md:flex-row md:gap-6">
          <Input
            onBlur={(event) => {
              console.log('event', event);
            }}
            variant="standard"
            startAdornment={<Typography>elektor</Typography>}
            label="From name"
            endAdornment={
              <Icon>
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </Icon>
            }
            onChange={onSearchChange}
            value={filter}
          />
        </Container>
        <IconButton
          variant="text"
          color="dark"
          onClick={refetchMessagesHandler}
        >
          <Icon>
            <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
          </Icon>
        </IconButton>
      </CardHeader>
      <CardBody>
        <MessagesList>{messages}</MessagesList>
      </CardBody>
    </Card>
  );
};

export default MessagesCard;
