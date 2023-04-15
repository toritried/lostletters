var Guestbook = (function() {
    var self = this, callbacks = [], _form, _list, _pagination;
  
    self.current_page = 1;
    self.entries = [];
  
    function reload() {
      _list.empty();
      list();
      _pagination.empty();
      pagination();
    }
  
    function getPage(page) {
      if (Number(page) > 0) {
        $.get("http://neocities-guestbook.herokuapp.com", { page: page }, function(json) {
          self.entries = json;
          self.current_page = Number(page);
          reload();
        });
      } else {
        (console || {error: function() {}}).error('Page is out of bounds: ' + page);
      }
    }
  
    function nextPage() {
      getPage(self.current_page + 1)
    }
  
    function prevPage() {
      getPage(self.current_page - 1);
    }
  
    function createEntry(options) {
      $.ajax({
        url: "http://neocities-guestbook.herokuapp.com",
        type: 'POST',
        data: {
          subdomain: 'test',
          name: options['name'],
          message: options['message'],
        },
        dataType: 'json',
        success: function(json) {
          addEntry(json);
          form()[0].reset();
  
          if (options['success']) {
            options['success'].call(this, json);
          }
        },
        error: options['error']
      });
    }
  
    function addEntry(entry) {
      self.entries.shift(entry);
      list().prepend(createListEntryRow2(entry));
      list().prepend(createListEntryRow1(entry));
    }
  
    function createListEntryRow1(entry){
      var tr= $('<tr />');
      tr.append('<td class="name">Name: ' + entry.name  + '</td>');
      tr.append('<td class="message" rowspan=2>' + entry.message  + '</td>');
      return tr;
    }
  
    function createListEntryRow2(entry){
      var tr= $('<tr />');
      tr.append('<td class="created_at">Created: ' + entry.created_at  + '</td>');
      return tr;
    }
  
    function list() {
      if (!_list || !_list.children()[0]) {
        _list = _list || $('<table id="messages" border=3 />');
  
        $.each(self.entries, function() {
          _list.append(createListEntryRow1(this));
          _list.append(createListEntryRow2(this));
        });
      }
      return _list;
    }
  
    function pagination() {
      if (!_pagination || !_pagination.children()[0]) {
        _pagination = _pagination || $(document.createElement('div'));
  
        var prev = $(document.createElement('span')),
            next = $(document.createElement('span'));
  
        prev.text('Previous');
        next.text('Next');
        if (self.current_page > 1) {
          prev
            .addClass('active')
            .data('page', self.current_page - 1);
        }
        next.data('page', self.current_page + 1);
        next.addClass('active');
  
        prev.on("click", prevPage);
        next.on("click", nextPage);
  
        _pagination.append(prev);
        _pagination.append(next);
      }
      return _pagination;
    }
  
    function form() {
      if (!_form || !_form.children()[0]) {
        var return_to = $(document.createElement('input')),
            name = $(document.createElement('input')),
            msg = $(document.createElement('input')),
            submit = $(document.createElement('input')),
            div, label;
  
        _form = _form || $(document.createElement('form'));
  
        _form.attr("action", "http://neocities-guestbook.herokuapp.com");
        _form.attr("method", "POST");
  
        return_to.attr("type", "hidden");
        return_to.attr("name", "return_to");
        return_to.attr("value", window.location.href);
  
        _form.append(return_to);
  
        name.attr("type", "text");
        name.attr("name", "name");
  
        div = $(document.createElement('div'));
  
        label = $(document.createElement('label'));
        label.text('Name')
        label.attr("for", "name");
  
        div.append(label);
        div.append(name);
        _form.append(div);
  
        msg.attr("type", "text");
        msg.attr("name", "message");
  
        div = $(document.createElement('div'));
  
        label = $(document.createElement('label'));
        label.text("Message");
        label.attr("for", "message");
  
        div.append(label);
        div.append(msg);
        _form.append(div);
  
        submit.attr("type", "submit");
        submit.val("Save");
  
        _form.append(submit);
  
        function validateForm() {
          _form
            .find('div.error')
              .remove()
            .end()
            .find('input.invalid')
              .removeClass('invalid');
          return (validateName() && validateMsg());
        }
  
        function validateName() {
          if (!name.val()) {
            name.addClass('invalid');
            name.after($('<div class="error">Cannot be blank</div>'));
          } else if (name.val().length > 100) {
            name.addClass('invalid');
            name.after($('<div class="error">Cannot be more than 100 characters</div>'));
          } else {
            return true;
          }
          return false;
        }
  
        function validateMsg() {
          if (!msg.val()) {
            msg.addClass('invalid');
            msg.after($('<div class="error">Cannot be blank</div>'));
          } else if (msg.val() > 140) {
            msg.addClass('invalid');
            msg.after($('<div class="error">Cannot be more than 140 characters</div>'));
          } else {
            return true;
          }
          return false;
        }
  
        _form.on("submit", function(e) {
          e.preventDefault();
          if (validateForm()) {
            createEntry({
              name: name.val(),
              message: msg.val()
            });
          }
          return false;
        });
      }
      return _form;
    }
  
    self.form = form;
    self.list = list;
    self.pagination = pagination;
    self.getPage = getPage;
    self.reload = reload;
  
    return self;
  
  }).call({});
  
  
  $.fn.guestbook = function() {
    this.append(Guestbook.form())
    this.append(Guestbook.list());
    this.append(Guestbook.pagination);
    Guestbook.getPage(1);
  }