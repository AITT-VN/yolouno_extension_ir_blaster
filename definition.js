Blockly.Blocks['yolo_uno_ir_blaster_create'] = {
  init: function() {
    this.jsonInit(
      {
          "type": "yolo_uno_ir_blaster_create",
          "message0": "IR blaster khởi tạo TX %1 RX %2",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "tx",
              "options": [
                [
                  "D3",
                  "D3"
                ],
                [
                  "D4",
                  "D4"
                ],
                [
                  "D5",
                  "D5"
                ],
                [
                  "D6",
                  "D6"
                ],
                [
                  "D7",
                  "D7"
                ],
                [
                  "D8",
                  "D8"
                ],
                [
                  "D9",
                  "D9"
                ],
                [
                  "D10",
                  "D10"
                ],
                [
                  "D11",
                  "D11"
                ],
                [
                  "D12",
                  "D12"
                ],
                [
                  "D13",
                  "D13"
                ],
                [
                  "D0",
                  "D0"
                ],
                [
                  "D1",
                  "D1"
                ],
                [
                  "D2",
                  "D2"
                ]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "rx",
              "options": [
                [
                  "D3",
                  "D3"
                ],
                [
                  "D4",
                  "D4"
                ],
                [
                  "D5",
                  "D5"
                ],
                [
                  "D6",
                  "D6"
                ],
                [
                  "D7",
                  "D7"
                ],
                [
                  "D8",
                  "D8"
                ],
                [
                  "D9",
                  "D9"
                ],
                [
                  "D10",
                  "D10"
                ],
                [
                  "D11",
                  "D11"
                ],
                [
                  "D12",
                  "D12"
                ],
                [
                  "D13",
                  "D13"
                ],
                [
                  "D0",
                  "D0"
                ],
                [
                  "D1",
                  "D1"
                ],
                [
                  "D2",
                  "D2"
                ]
              ]
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#6C3483",
          "tooltip": "",
          "helpUrl": ""
        }
    );
      }
  };

Blockly.Python['yolo_uno_ir_blaster_create'] = function(block) {
    var tx = block.getFieldValue('tx');
    var rx = block.getFieldValue('rx');
    Blockly.Python.definitions_['import_yolo_uno'] = 'from yolo_uno import *';
    Blockly.Python.definitions_['import_machine'] = 'from ir_blaster import IRBlaster';
    Blockly.Python.definitions_['import_utime'] = 'import utime';
    Blockly.Python.definitions_['ir_blaster_init'] = 'ir_blaster = IRBlaster(tx_pin ='+ tx + '_PIN,' + 'rx_pin =' + rx +'_PIN)\n';
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    return code;
};

Blockly.Blocks['yolo_uno_ir_blaster_show'] = {
  init: function() {
    this.jsonInit(
      {
          "type": "yolo_uno_ir_blaster_show",
          "message0": "in ra danh sách tín hiệu hiện tại",
          "args0": [],
          "previousStatement": null,
          "nextStatement": null,
          "colour": "#6C3483",
          "tooltip": "",
          "helpUrl": ""
        }
    );
      }
  };

Blockly.Python['yolo_uno_ir_blaster_show'] = function(block) {
    Blockly.Python.definitions_['import_yolo_uno'] = 'from yolo_uno import *';
    Blockly.Python.definitions_['import_machine'] = 'from ir_blaster import IRBlaster';
    // TODO: Assemble JavaScript into code variable.
    var code = 'ir_blaster.show_signal_list()\n';
    return code;
};

Blockly.Blocks['yolo_uno_ir_blaster_checkscan'] = {
  init: function () {
    this.jsonInit({
      "type": "yolo_uno_ir_blaster_checkscan",
      "message0": "kiểm tra tín hiệu %1 %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_dummy",
        }
      ],
      "colour": "#6C3483",
      "output": "Boolean",
      "tooltip": "Kiểm tra xem tín hiệu có tên đã được lưu hay chưa",
      "helpUrl": ""
    });
  }
};


Blockly.Python['yolo_uno_ir_blaster_checkscan'] = function (block) {
  var signal_name = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC);
  var code = 'ir_blaster.checkscan(' + signal_name + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Blocks['yolo_uno_ir_blaster_scan'] = {
  init: function () {
    this.jsonInit({
      "type": "yolo_uno_ir_blaster_scan",
      "message0": "quét và lưu tín hiệu %1 %2 %3",
      "args0": [
        {
          "type": "input_dummy",
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_dummy",
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#6C3483",
      "tooltip": "Quét và lưu tín hiệu IR cho thiết bị được đặt tên",
      "helpUrl": "",
      "generator_async": true
    });
  }
};

Blockly.Python['yolo_uno_ir_blaster_scan'] = function (block) {
  var signal_name = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC);
  var code = 'await ir_blaster.scan(' + signal_name + ')\n';
  return code;
};

Blockly.Blocks['yolo_uno_ir_blaster_send'] = {
  init: function () {
    this.jsonInit({
      "type": "yolo_uno_ir_blaster_send",
      "message0": "gửi tín hiệu %1 %2 %3",
      "args0": [
        {
          "type": "input_dummy",
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_dummy",
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#6C3483",
      "tooltip": "Gửi tín hiệu IR theo tên đã lưu",
      "helpUrl": "",
      "generator_async": true
    });
  }
};

Blockly.Python['yolo_uno_ir_blaster_send'] = function (block) {
  var signal_name = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC);
  var code = 'await ir_blaster.send(' + signal_name + ')\n';
  return code;
};