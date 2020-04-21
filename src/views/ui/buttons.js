import React from 'react'
import { Card, Button, Radio, Tooltip } from 'antd'
import { SearchOutlined, PoweroffOutlined, DownloadOutlined } from '@ant-design/icons';
export default class Buttons extends React.Component {
    state = {
        loading: true,
        size: 'default'
    }

    handleCloseLoading = () => {
        this.setState({
            loading: false
        });
    }

    handleChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    render() {
        const { size } = this.state;
        return (
            <>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="link">Link</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="primary" shape="circle">A  </Button>
                    <Button type="primary" icon={<SearchOutlined />}> Search  </Button>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                    <br />
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                    <Tooltip title="search">
                        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="dashed" icon={<SearchOutlined />}>  Search </Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading>Loading </Button>
                    <Button type="primary" size="small" loading> Loading </Button>
                    <br />
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>Click me! </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={this.state.iconLoading}
                        onClick={this.enterIconLoading}
                    >Click me! </Button>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={size} onChange={this.handleSizeChange}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                    <br />
                    <br />
                    <Button type="primary" size={size}> Primary </Button>
                    <Button size={size}>Default</Button>
                    <Button type="dashed" size={size}>Dashed</Button>
                    <br />
                    <Button type="link" size={size}>Link </Button>
                    <br />
                    <Button type="primary" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                    <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}> Download </Button>
                    <Button type="primary" icon={<DownloadOutlined />} size={size}>Download </Button>
                </Card>
            </>
        );
    }
}