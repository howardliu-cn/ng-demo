import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  setting = {
    data: {
      simpleData: {
        enable: true
      }
    }
  };

  zNodes = [
    {id: 1, pId: 0, name: '1 一级标题'},
    {id: 11, pId: 1, name: '1.1 二级标题'},
    {id: 111, pId: 11, name: '1.1.1 三级标题'},
    {id: 112, pId: 11, name: '1.1.2 三级标题'},
    {id: 12, pId: 1, name: '1.2 二级标题'},
    {id: 2, pId: 0, name: '2 一级标题'}
  ];

  constructor() {
  }

  ngOnInit() {
    console.log($);
    console.log($.fn.zTree);
    $.fn.zTree.init($('#ztree'), this.setting, this.zNodes);
  }
}
