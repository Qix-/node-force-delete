#include "v8.h"
#include "node.h"
#include "nan.h"

using namespace v8;
using namespace node;

namespace {

NAN_METHOD(Del) {
  NanScope();

  Local<Object> obj = Local<Object>::Cast(args[0]);
  Local<String> name = args[1]->ToString();

  obj->ForceDelete(name);

  NanReturnUndefined();
}

void Initialize(Handle<Object> target) {
  NanScope();
  NODE_SET_METHOD(target, "del", Del);
}

} // anonymous namespace

NODE_MODULE(binding, Initialize);
