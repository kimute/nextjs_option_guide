import Navigation from "@/components/Navigation";
import { CodeBracketIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

/**
 * TypeScript 옵션 상세 페이지
 * 비개발자도 쉽게 이해할 수 있도록 비유와 예시를 포함
 */
export default function TypeScriptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 헤더 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <CodeBracketIcon className="h-12 w-12 text-blue-600 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">TypeScript</h1>
              <p className="text-lg text-gray-600">JavaScript의 강화판</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">
              🚗 자동차 비유로 이해하기
            </h2>
            <p className="text-blue-800 leading-relaxed">
              JavaScript가 <strong>수동 변속기 자동차</strong>라면, 
              TypeScript는 <strong>자동 변속기 자동차</strong>입니다. 
              둘 다 목적지에 도달할 수 있지만, 자동 변속기가 더 안전하고 편리하죠!
            </p>
          </div>
        </div>

        {/* 기본 설명 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🤔 TypeScript가 뭔가요?
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              TypeScript는 JavaScript에 <strong>&ldquo;타입&rdquo;</strong>이라는 규칙을 추가한 언어입니다. 
              마치 교통 신호등이 차량의 안전한 주행을 도와주는 것처럼, 
              TypeScript는 코드 작성 시 실수를 미리 방지해줍니다.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">📝 간단한 예시:</h3>
              <p className="text-gray-700">
                친구에게 &ldquo;나이가 몇 살이야?&rdquo;라고 물었는데 
                &ldquo;파란색&rdquo;이라고 답한다면 이상하겠죠? 
                TypeScript는 이런 종류의 실수를 코드에서 미리 잡아줍니다.
              </p>
            </div>
          </div>
        </div>

        {/* 장점과 단점 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 장점 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <CheckCircleIcon className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">장점</h3>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <div>
                  <strong className="text-gray-900">실수 방지</strong>
                  <p className="text-gray-600 text-sm">코드 작성 중 오타나 실수를 즉시 알려줍니다</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <div>
                  <strong className="text-gray-900">자동 완성</strong>
                  <p className="text-gray-600 text-sm">에디터가 똑똑해져서 코드를 자동으로 완성해줍니다</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <div>
                  <strong className="text-gray-900">유지보수 용이</strong>
                  <p className="text-gray-600 text-sm">나중에 코드를 수정할 때 더 쉽고 안전합니다</p>
                </div>
              </li>
            </ul>
          </div>

          {/* 단점 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <XCircleIcon className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">단점</h3>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❌</span>
                <div>
                  <strong className="text-gray-900">학습 공선</strong>
                  <p className="text-gray-600 text-sm">처음에는 새로운 규칙을 배워야 합니다</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❌</span>
                <div>
                  <strong className="text-gray-900">초기 설정</strong>
                  <p className="text-gray-600 text-sm">처음 시작할 때 설정이 조금 복잡할 수 있습니다</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❌</span>
                <div>
                  <strong className="text-gray-900">작성 시간</strong>
                  <p className="text-gray-600 text-sm">타입을 명시해야 해서 코드가 조금 더 길어집니다</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 실습 예제 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            💻 실습 예제
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🟡 JavaScript (일반)
              </h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 font-mono text-sm">
{`function greetUser(name) {
  return "안녕하세요, " + name + "님!";
}

// 이런 실수를 할 수 있습니다
greetUser(123); // 숫자를 넣어도 에러가 안남`}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🔵 TypeScript (안전한 버전)
              </h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 font-mono text-sm">
{`function greetUser(name: string): string {
  return "안녕하세요, " + name + "님!";
}

// 이제 실수하면 미리 알려줍니다
greetUser(123); // ❌ 에러! 문자열이 아니라고 알려줌
greetUser("김철수"); // ✅ 올바른 사용법`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* 사용 방법 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🚀 사용 방법
          </h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">
                1️⃣ 자동 설정 (추천)
              </h3>
              <p className="text-blue-800 mb-3">
                create-next-app을 사용하면 TypeScript가 자동으로 설정됩니다.
              </p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-green-400 font-mono">
                  npx create-next-app@latest my-app --typescript
                </code>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">
                2️⃣ 대화형 설정
              </h3>
              <p className="text-green-800 mb-3">
                명령어 실행 후 &ldquo;TypeScript를 사용하시겠습니까?&rdquo;에서 <strong>Yes</strong>를 선택하세요.
              </p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-green-400 font-mono">
                  npx create-next-app@latest my-app
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* 결론 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            💡 결론
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            TypeScript는 처음에는 조금 어려울 수 있지만, 
            장기적으로 보면 <strong>개발 속도를 높이고 버그를 줄여주는</strong> 훌륭한 도구입니다.
          </p>
          <div className="bg-white/20 rounded-lg p-4">
            <p className="font-semibold">
              🎯 초보자 추천: TypeScript를 사용하세요! 
              처음에는 어려워도 나중에 반드시 도움이 됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}