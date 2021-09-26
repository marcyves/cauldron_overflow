import { Controller } from 'stimulus';

import $ from 'jquery';
/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
export default class extends Controller {
    connect() {
        this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
}

/**
 * Simple (ugly) code to handle the comment vote up/down
 */
 var $container = $('.js-vote-arrows');

 $container.find('a').on('click', function(e) {
     e.preventDefault();
     var $link = $(e.currentTarget);
 
     $.ajax({
         url: '/comment/10/vote/'+$link.data('direction'),
         method: 'POST'
     }).then(function(data) {
         $container.find('.js-vote-total').text(data.votes);
     });
 });
 
