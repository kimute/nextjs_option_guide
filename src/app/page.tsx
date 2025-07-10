import Link from "next/link";
import { 
  CodeBracketIcon, 
  PaintBrushIcon, 
  ShieldCheckIcon,
  CogIcon,
  FolderIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Navigation from "@/components/Navigation";

/**
 * 메인 페이지 컴포넌트
 * Next.js create-next-app 옵션들을 비개발자도 쉽게 이해할 수 있도록 설명
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 네비게이션 */}
      <Navigation />

      {/* 헤더 섹션 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🚀 Next.js 가이드북
            </h1>
            <p className="text-xl text-gray-600">
              create-next-app 옵션들을 쉽게 이해하는 완벽 가이드
            </p>
          </div>
        </div>
      </header>

      {/* 소개 섹션 */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🤔 Next.js가 뭔가요?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Next.js는 웹사이트를 만들기 위한 <strong>도구</strong>입니다. 
              마치 레고 블록으로 집을 짓는 것처럼, 미리 만들어진 부품들을 조립해서 
              빠르고 쉽게 웹사이트를 만들 수 있게 해줍니다.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-800">
                <strong>🏠 비유:</strong> Next.js는 &ldquo;조립식 주택 키트&rdquo;와 같습니다. 
                벽돌 하나하나 쉘는 대신, 미리 만들어진 벽과 지붕을 조립하여 
                빠르게 집을 완성할 수 있죠!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              ⚡ create-next-app이란?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <code className="bg-gray-100 px-2 py-1 rounded">create-next-app</code>은 
              Next.js 프로젝트를 자동으로 만들어주는 <strong>마법의 명령어</strong>입니다.
            </p>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-green-800">
                <strong>🎯 핵심:</strong> 터미널에서 한 줄만 입력하면, 
                웹사이트 개발에 필요한 모든 파일과 설정이 자동으로 생성됩니다!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 옵션 카드 섹션 */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🛠️ 주요 옵션들
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TypeScript 옵션 */}
            <Link href="/options/typescript" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <CodeBracketIcon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">TypeScript</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  JavaScript의 <strong>강화판</strong>입니다. 오타나 실수를 미리 잡아줘서 더 안전한 코드를 작성할 수 있습니다.
                </p>
                <div className="bg-blue-50 rounded-lg p-3 text-sm">
                  <strong>🔧 옵션:</strong> <code>--typescript</code> 또는 <code>--ts</code>
                </div>
              </div>
            </Link>

            {/* Tailwind CSS 옵션 */}
            <Link href="/options/tailwind" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <PaintBrushIcon className="h-8 w-8 text-pink-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Tailwind CSS</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  웹사이트를 <strong>예쁘게 꾸미는</strong> 도구입니다. 색상, 크기, 배치 등을 쉽게 조정할 수 있습니다.
                </p>
                <div className="bg-pink-50 rounded-lg p-3 text-sm">
                  <strong>🔧 옵션:</strong> <code>--tailwind</code>
                </div>
              </div>
            </Link>

            {/* ESLint 옵션 */}
            <Link href="/options/eslint" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <ShieldCheckIcon className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">ESLint</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  코드의 <strong>문법 검사기</strong>입니다. 맞춤법 검사기처럼 코드에서 실수를 찾아줍니다.
                </p>
                <div className="bg-green-50 rounded-lg p-3 text-sm">
                  <strong>🔧 옵션:</strong> <code>--eslint</code>
                </div>
              </div>
            </Link>

            {/* App Router 옵션 */}
            <Link href="/options/app-router" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <CogIcon className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">App Router</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  웹사이트 <strong>페이지 구조</strong>를 관리하는 최신 방식입니다. 더 빠르고 효율적입니다.
                </p>
                <div className="bg-purple-50 rounded-lg p-3 text-sm">
                  <strong>🔧 옵션:</strong> <code>--app</code>
                </div>
              </div>
            </Link>

            {/* src 디렉토리 옵션 */}
            <Link href="/options/src-dir" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <FolderIcon className="h-8 w-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">src 디렉토리</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  코드 파일들을 <strong>src 폴더</strong>에 깔끔하게 정리합니다. 서류를 파일 박스에 넣는 것과 같습니다.
                </p>
                <div className="bg-yellow-50 rounded-lg p-3 text-sm">
                  <strong>🔧 옵션:</strong> <code>--src-dir</code>
                </div>
              </div>
            </Link>

            {/* Turbopack 옵션 */}
            <Link href="/options/turbo" className="block">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <RocketLaunchIcon className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Turbopack</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  개발할 때 웹사이트를 <strong>더 빠르게</strong> 실행시켜주는 엔진입니다. 컴퓨터 성능을 최적화합니다.
                </p>
                <div className="bg-red-50 rounded-lg p-3 text-sm">
                  <strong>🔧 옵션:</strong> <code>--turbo</code>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 실습 섹션 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🎯 실습해보기
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              📝 기본 명령어 실습
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">터미널에서 실행:</p>
                <code className="text-green-400 font-mono">
                  npx create-next-app@latest my-first-app
                </code>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">🤖 이렇게 물어볼 거예요:</h4>
                <ul className="text-blue-800 space-y-2">
                  <li>• TypeScript를 사용하시겠어요? (Yes 추천)</li>
                  <li>• ESLint를 사용하시겠어요? (Yes 추천)</li>
                  <li>• Tailwind CSS를 사용하시겠어요? (Yes 추천)</li>
                  <li>• src 폴더를 사용하시겠어요? (Yes 추천)</li>
                  <li>• App Router를 사용하시겠어요? (Yes 추천)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">✅ 추천 설정:</h4>
                <code className="text-green-800 font-mono block">
                  npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            🚀 Next.js 가이드북 - 비개발자도 쉽게 이해하는 웹 개발
          </p>
        </div>
      </footer>
    </div>
  );
}