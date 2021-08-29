/*
 * @Author: yukang 1172248038@qq.com
 * @Description:
 * @Date: 2021-01-30 19:43:19
 * @LastEditTime: 2021-02-19 11:12:32
 */
export function getEditContent(h, data, node) {
  let self = this;
  return (
    <span class="ly-visible">
      <el-button
        size="mini"
        type="text"
        on-click={() => self.close(data, node)}
      >
        取消
      </el-button>
      <el-button
        size="mini"
        type="text"
        on-click={() => self.editMsg(data, node)}
      >
        确认
      </el-button>
    </span>
  );
}

export function getDefaultContent(h, data, node) {
  let self = this;
  return (
    node.level !== 1 && (
      <div class="ly-visible">
        {self.isSuperuser && (
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => self.update(node, data)}
            >
              编辑
            </el-button>

            {
              <el-button
                size="mini"
                type="text"
                on-click={() => self.append(node, data)}
              >
                添加
              </el-button>
            }

            {
              <el-button
                size="mini"
                type="text"
                on-click={() => self.remove(node, data)}
              >
                删除
              </el-button>
            }
            {!node.data.child &&
              ((data.status === 1 && (
                <el-button
                  size="mini"
                  type="text"
                  on-click={() => self.publish(node, data)}
                >
                  取消发布
                </el-button>
              )) || (
                <el-button
                  size="mini"
                  type="text"
                  on-click={() => self.publish(node, data)}
                >
                  发布
                </el-button>
              ))}
          </span>
        )}
      </div>
    )
  );
}