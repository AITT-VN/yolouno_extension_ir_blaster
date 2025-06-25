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


Blockly.Blocks['yolo_uno_ir_blaster_scan'] = {
  init: function () {
    this.jsonInit({
      "type": "yolo_uno_ir_blaster_scan",
      "message0": "quét và lưu tín hiệu %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MESSAGE",
          "options": [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#6C3483",
      "tooltip": "Quét và lưu tín hiệu IR cho thiết bị được chọn",
      "helpUrl": "",
      "generator_async": true
    });
  }
};

Blockly.Python['yolo_uno_ir_blaster_scan'] = function (block) {
  var signal_number = block.getFieldValue('MESSAGE');  // Get the selected number (1-10)
  var code = 'await ir_blaster.scan("' + signal_number + '")\n';  // Use the selected number as input
  return code;
};


Blockly.Blocks['yolo_uno_ir_blaster_send'] = {
  init: function () {
    this.jsonInit({
      "type": "yolo_uno_ir_blaster_send",
      "message0": "gửi tín hiệu %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MESSAGE",
          "options": [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"]
          ]
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
  var signal_number = block.getFieldValue('MESSAGE');  // Get the selected number (1-10)
  var code = 'await ir_blaster.send("' + signal_number + '")\n';  // Use the selected number as input
  return code;
};

Blockly.Blocks['yolobit_ir_blaster_delete'] = {
  init: function () {
    this.jsonInit({
      "type": "yolobit_ir_blaster_delete",
      "message0": "xóa tín hiệu %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "MESSAGE",
          "options": [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
            ["7", "7"],
            ["8", "8"],
            ["9", "9"],
            ["10", "10"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": "#6C3483",
      "tooltip": "Xóa tín hiệu IR đã lưu theo tên thiết bị",
      "helpUrl": ""
    });
  }
};

Blockly.Python['yolobit_ir_blaster_delete'] = function (block) {
  var signal_name = block.getFieldValue('MESSAGE');
  var code = 'ir_blaster.delete_signal("' + signal_name + '")\n';
  return code;
};
