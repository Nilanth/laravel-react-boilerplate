import {Button, Col, Form, Input, Layout, Row} from 'antd';
import {NavLink} from 'react-router-dom';
import actions from '../redux/Authenticate/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function RegistrationForm() {
  const {registerLoader} = useSelector(state => state.authenticateReducer)
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch({
      type: actions.REGISTER,
      payload: values,
    });
  };
  return (
    <Layout className="layout">
      <Row justify="center" align="middle">
        <Col span={6}>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            layout="vertical"
            size="large"
            className="register-form"
          >
            <Form.Item
              name="name"
              label="Name"
              validateTrigger="onSubmit"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                  whitespace: true,
                },
              ]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              validateTrigger="onSubmit"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              validateTrigger="onSubmit"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password/>
            </Form.Item>
            <Form.Item
              name="password_confirmation"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              validateTrigger="onSubmit"
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({getFieldValue}) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block loading={registerLoader}>
                Register
              </Button>
            </Form.Item>
            <div>
              <NavLink to="/login">Already have an account, Login in</NavLink>
            </div>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
};
