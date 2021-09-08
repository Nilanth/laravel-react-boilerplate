import {useDispatch} from 'react-redux'
import actions from '../redux/Authenticate/actions';
import {useSelector} from 'react-redux'
import {Form, Input, Button, Checkbox, Row, Col, Layout} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';

function LoginPage() {
  const {loader} = useSelector(state => state.authenticateReducer)

  const dispatch = useDispatch();

  let onFinish = (values) => {
    dispatch({
      type: actions.LOGIN,
      payload: {'email': values.email, 'password': values.password, 'remember': values.remember},
    });
  };

  return (
    <Layout className="layout">
      <Row justify="center" align="middle">
        <Col span={6}>
          <Form
            name="normal_login"
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              validateTrigger="onSubmit"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input size="large"
                prefix={<UserOutlined className="site-form-item-icon"/>}
                placeholder="Email"/>
            </Form.Item>
            <Form.Item
              name="password"
              validateTrigger="onSubmit"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon"/>}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="">Forgot password</a>
            </Form.Item>
            <Form.Item>
              <Button loading={loader} type="primary" htmlType="submit" className="login-form-button"
                size="large">Log in
              </Button>Or <NavLink to="/register">register now!</NavLink>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
}

export default LoginPage;
