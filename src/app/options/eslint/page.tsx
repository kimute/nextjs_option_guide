import Navigation from "@/components/Navigation";
import { ShieldCheckIcon, BugAntIcon, CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

/**
 * ESLint 옵션 상세 페이지
 * 비개발자도 쉽게 이해할 수 있도록 비유와 예시를 포함
 */
export default function ESLintPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 헤더 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <ShieldCheckIcon className="h-12 w-12 text-green-600 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">ESLint</h1>
              <p className="text-lg text-gray-600">코드의 문법 검사기</p>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-900 mb-3">
              📝 맞춤법 검사기 비유로 이해하기
            </h2>
            <p className="text-green-800 leading-relaxed">
              ESLint는 코드의 <strong>&ldquo;맞춤법 검사기&rdquo;</strong>입니다. 
              워드프로세서에서 글을 쓸 때 빨간 밑줄로 틀린 부분을 알려주는 것처럼, 
              ESLint는 코드에서 실수나 개선할 부분을 찾아서 알려줍니다!
            </p>
          </div>
        </div>

        {/* 기본 설명 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🤔 ESLint가 뭔가요?
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              ESLint는 JavaScript와 TypeScript 코드를 <strong>자동으로 검사</strong>해주는 도구입니다. 
              마치 선생님이 숙제를 검사해서 틀린 부분을 빨간 펜으로 표시해주는 것처럼, 
              ESLint는 코드에서 문제가 될 수 있는 부분을 미리 찾아서 알려줍니다.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">🔍 검사하는 내용들:</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• <strong>문법 오류:</strong> 괄호를 안 닫았거나, 세미콜론을 빠뜨린 경우</li>
                <li>• <strong>스타일 일관성:</strong> 들여쓰기, 따옴표 사용 방식 등</li>
                <li>• <strong>잠재적 버그:</strong> 실수하기 쉬운 코드 패턴</li>
                <li>• <strong>성능 문제:</strong> 비효율적인 코드 작성 방식</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ESLint 없이 vs ESLint 있을 때 비교 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* ESLint 없이 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <BugAntIcon className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">ESLint 없이</h3>
            </div>
            
            <div className="space-y-3">
              <div className="bg-gray-900 rounded-lg p-3">
                <pre className="text-red-400 font-mono text-sm">
{`function hello() {
  console.log("안녕하세요")
  // 세미콜론 빠짐
  let name = "김철수"
  if (name == "김철수") {
    // == 대신 === 사용 권장
    console.log('안녕, ' + name)
  }
}`}
                </pre>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <p className="text-red-800 text-sm">
                  ❌ <strong>문제점:</strong><br/>
                  • 실수를 찾기 어려움<br/>
                  • 코드 스타일이 일관되지 않음<br/>
                  • 버그 발생 가능성 높음
                </p>
              </div>
            </div>
          </div>

          {/* ESLint 있을 때 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <CheckCircleIcon className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">ESLint 있을 때</h3>
            </div>
            
            <div className="space-y-3">
              <div className="bg-gray-900 rounded-lg p-3">
                <pre className="text-green-400 font-mono text-sm">
{`function hello() {
  console.log("안녕하세요");
  // 세미콜론 자동 추가
  const name = "김철수";
  if (name === "김철수") {
    // === 사용 권장
    console.log("안녕, " + name);
  }
}`}
                </pre>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-green-800 text-sm">
                  ✅ <strong>장점:</strong><br/>
                  • 실수를 즉시 발견<br/>
                  • 일관된 코드 스타일<br/>
                  • 버그 예방 효과
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 실제 경고 예제 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ⚠️ 실제 ESLint 경고 예제
          </h2>
          
          <div className="space-y-6">
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 mb-2">
                🚨 실제 에디터에서 보이는 경고들:
              </h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <p className="text-yellow-800 font-medium">Missing semicolon</p>
                    <p className="text-yellow-700 text-sm">세미콜론이 빠져있습니다</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <p className="text-yellow-800 font-medium">Prefer const over let</p>
                    <p className="text-yellow-700 text-sm">변하지 않는 값은 const를 사용하세요</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <p className="text-yellow-800 font-medium">Use triple equals</p>
                    <p className="text-yellow-700 text-sm">==보다 ===를 사용하세요</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">
                💡 자동 수정 기능
              </h3>
              <p className="text-blue-800 mb-3">
                ESLint는 많은 문제를 <strong>자동으로 수정</strong>해줍니다!
              </p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-green-400 font-mono text-sm">
                  npm run lint -- --fix
                </code>
              </div>
              <p className="text-blue-700 text-sm mt-2">
                이 명령어로 수정 가능한 문제들을 한 번에 고칠 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 장점 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ✨ ESLint의 장점
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">🔍</span>
                <div>
                  <h3 className="font-semibold text-gray-900">실수 조기 발견</h3>
                  <p className="text-gray-600 text-sm">코드를 실행하기 전에 문제를 미리 찾아줍니다</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-900">일관된 코드 스타일</h3>
                  <p className="text-gray-600 text-sm">팀원들과 동일한 코드 스타일을 유지할 수 있습니다</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">🚀</span>
                <div>
                  <h3 className="font-semibold text-gray-900">개발 속도 향상</h3>
                  <p className="text-gray-600 text-sm">디버깅 시간을 줄여서 개발 속도가 빨라집니다</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">📚</span>
                <div>
                  <h3 className="font-semibold text-gray-900">학습 효과</h3>
                  <p className="text-gray-600 text-sm">좋은 코딩 습관을 자연스럽게 배울 수 있습니다</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">🔧</span>
                <div>
                  <h3 className="font-semibold text-gray-900">자동 수정</h3>
                  <p className="text-gray-600 text-sm">많은 문제들을 자동으로 수정해줍니다</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">🛡️</span>
                <div>
                  <h3 className="font-semibold text-gray-900">버그 예방</h3>
                  <p className="text-gray-600 text-sm">잠재적인 버그를 사전에 방지합니다</p>
                </div>
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
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">
                1️⃣ 자동 설정 (권장)
              </h3>
              <p className="text-green-800 mb-3">
                create-next-app을 사용하면 ESLint가 자동으로 설정됩니다.
              </p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-green-400 font-mono">
                  npx create-next-app@latest my-app --eslint
                </code>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">
                2️⃣ 수동 실행
              </h3>
              <p className="text-blue-800 mb-3">
                프로젝트에서 ESLint를 수동으로 실행할 수 있습니다.
              </p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-green-400 font-mono">
                  npm run lint
                </code>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 mb-2">
                3️⃣ 자동 수정
              </h3>
              <p className="text-purple-800 mb-3">
                수정 가능한 문제들을 자동으로 고칠 수 있습니다.
              </p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-green-400 font-mono">
                  npm run lint -- --fix
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* 초보자 팁 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            💡 초보자를 위한 팁
          </h2>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 mb-2">
                🌟 처음에는 경고가 많이 나와도 걱정하지 마세요!
              </h3>
              <p className="text-yellow-800">
                ESLint는 매우 엄격한 검사기입니다. 처음에는 경고가 많이 나오는 것이 정상이에요. 
                하나씩 차근차근 고쳐나가면서 좋은 코딩 습관을 만들어보세요.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">
                🔧 에디터 설정 권장
              </h3>
              <p className="text-blue-800">
                VS Code나 다른 에디터에서 ESLint 확장 프로그램을 설치하면 
                실시간으로 경고를 보여주어서 더 편리합니다.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">
                📚 학습 자료로 활용
              </h3>
              <p className="text-green-800">
                ESLint 경고 메시지를 읽어보면 더 나은 코딩 방법을 배울 수 있습니다. 
                경고가 나오면 왜 그런 경고가 나오는지 찾아보세요.
              </p>
            </div>
          </div>
        </div>

        {/* 결론 */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            💡 결론
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            ESLint는 <strong>코드 품질을 높이고 버그를 예방</strong>하는 필수 도구입니다. 
            처음에는 번거로울 수 있지만, 장기적으로는 개발 효율성을 크게 향상시켜줍니다.
          </p>
          <div className="bg-white/20 rounded-lg p-4">
            <p className="font-semibold">
              🎯 초보자 추천: ESLint를 사용하세요! 
              좋은 코딩 습관을 만드는 최고의 선생님입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}