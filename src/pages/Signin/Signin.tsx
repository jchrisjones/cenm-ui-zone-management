import React from 'react'

import { Row, Col, Form, Input, Button, Checkbox, Card } from 'antd'

const Signin = () => {
  const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 14 },
  }

  const tailLayout = {
    wrapperCol: { offset: 7, span: 14 },
  }

  return (
    <Row className='full-height'>
      <Col className='full-height' span={12}>
        <div className='signin-container'>
          <Card className='signin-container__card'>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
              Sign In
            </h2>
            <Form {...layout} name='basic'>
              <Form.Item
                label='Username'
                name='username'
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name='remember'>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Col>
      <Col className='full-height' span={12}>
        <div className='auth-background'>
          <div className='corda-image' />
          <h3>Admin Panel</h3>
        </div>
      </Col>
    </Row>
  )
}

export default Signin
